import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';


const useChampionship = () => {

    const store = useStore();

    onMounted(() => {
        store.dispatch('championship/loadChampionships');
    });

    const championshipById = (id) => {
        return store.getters['championship/getChampionshipById'](id);   
    };
            
    return {
        championships: computed(() => store.getters['championship/getChampionships']),
        championshipById,
    }
}

export default useChampionship;