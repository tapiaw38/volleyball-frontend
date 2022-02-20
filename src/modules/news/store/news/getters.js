// getters news

// get all news
export const getNews = state => state.news;

// get news by id
export const getNewById = (state) => ( id = '' ) => {
    const new_obj = state.news.find( n => n.id === id )
    if ( !new_obj ) return
    return { ...new_obj }
}