// getters championships

// get all championships
export const getChampionships = state => state.championships;

// get championship by id
export const getChampionshipById = (state) => ( id = '' ) => {
    const obj = state.championships.find( c => c.id === id )
    if ( !obj ) return
    return { ...obj }
}