import { ref, watch } from "vue";
import { useAuth } from "../composables/auth.js";

const { user } = useAuth();

const liked = ref([]);

function getStorageKey() {
    if (!user.value) return null;

    return `favorites_${user.value.email}`;
}

function loadFavorites() {
    const key = getStorageKey();

    if (!key) return [];

    try {
        const saved = JSON.parse(localStorage.getItem(key) || "[]");

        return Array.isArray(saved)
            ? saved.map(String)
            : [];
    } catch {
        return [];
    }
}

// Favoriten beim Start laden
liked.value = loadFavorites();

// Bei Accountwechsel Favoriten neu laden
watch(
    () => user.value?.email,
    () => {
        liked.value = loadFavorites();
    }
);

// Favoriten speichern
watch(
    liked,
    (value) => {
        const key = getStorageKey();

        if (!key) return;

        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("Fehler beim Speichern der Favoriten:", error);
        }
    },
    { deep: true }
);

export function useFavorites() {
    function isLiked(id) {
        return liked.value.includes(String(id));
    }

    function toggleFavorite(id) {
        const productId = String(id);

        if (isLiked(productId)) {
            liked.value = liked.value.filter(
                (i) => i !== productId
            );
        } else {
            liked.value.push(productId);
        }
    }

    return {
        liked,
        isLiked,
        toggleFavorite
    };
}