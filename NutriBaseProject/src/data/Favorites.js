import { ref, watch } from "vue";
import { useAuth } from "../composables/auth.js";

const { user } = useAuth();

const liked = ref([]);

function getStorageKey() {
    if (!user.value) {
        return null;
    }

    return `favorites_${user.value.email}`;
}

function loadFavorites() {
    try {
        const key = getStorageKey();

        if (!key) return [];

        const saved = JSON.parse(
            localStorage.getItem(key)
        );

        return Array.isArray(saved) ? saved : [];
    } catch {
        return [];
    }
}

// Favoriten beim Start laden
liked.value = loadFavorites();

// Bei Accountwechsel die richtigen Favoriten laden
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
            localStorage.setItem(
                key,
                JSON.stringify(value)
            );
        } catch {
            // Speicherfehler
        }
    },
    { deep: true }
);

export function useFavorites() {

    function isLiked(id) {
        return liked.value.includes(id);
    }

    function toggleFavorite(id) {
        if (isLiked(id)) {
            liked.value = liked.value.filter(
                i => i !== id
            );
        } else {
            liked.value.push(id);
        }
    }

    return {
        liked,
        isLiked,
        toggleFavorite
    };
}