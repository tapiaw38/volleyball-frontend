// mutations news

export const setChampionships = (state, championships) => {
    state.championships = championships;
    state.isLoading = false;
}