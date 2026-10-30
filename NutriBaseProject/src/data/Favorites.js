import { ref, watch } from "vue";

const STORAGE_KEY = "favorites";

function loadFavorites(){
    try{
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
        return Array.isArray(saved) ? saved : [];
    } catch{
        return [];
    }
}
const liked = ref(loadFavorites());

watch(
    liked,
    (value) => {
        try{
            localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
        }catch{

        }
    },
    {deep: true}
);

export function useFavorites() {
    function isLiked(id) {
        return liked.value.includes(id);
    }

    function toggleFavorite(id) {
        if (isLiked(id)) {
            liked.value = liked.value.filter((i) => i !== id);
        } else {
            liked.value.push(id);
        }
    }

    return { liked, isLiked, toggleFavorite };
}