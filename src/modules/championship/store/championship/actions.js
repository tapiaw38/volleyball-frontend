// import api
import leagueApi from "../../../../api/leagueApi";

// actions championships
export const loadChampionships = async ({ commit }) => {
    const { data } = await leagueApi.get('/league/');
    commit('setChampionships', data.results);
};

