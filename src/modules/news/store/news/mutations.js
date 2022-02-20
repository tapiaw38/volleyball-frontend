// mutations news

export const setNews = (state, news) => {
    state.news = news;
    state.isLoading = false;
}