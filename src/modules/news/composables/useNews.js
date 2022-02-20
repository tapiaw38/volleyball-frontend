import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';


const useNews = () => {

    const store = useStore();

    onMounted(() => {
        store.dispatch('news/loadNews');
    });

    const newById = (id) => {
        return store.getters['news/getNewById'](id);   
    };
            
    return {
        news: computed(() => store.getters['news/getNews']),
        newById,
    }
}

export default useNews;