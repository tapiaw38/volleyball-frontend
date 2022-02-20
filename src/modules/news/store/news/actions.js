// import api
import leagueApi from "../../../../api/leagueApi";

// actions news
export const loadNews = async ({ commit }) => {
    const { data } = await leagueApi.get('/new/');
    commit('setNews', data.results);
};

