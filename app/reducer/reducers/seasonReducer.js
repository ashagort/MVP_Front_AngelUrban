export function SeasonItems(state = {items:{}}, action) {
    switch (action.type) {
        case 'Season_Race_Succes':
            return {...state, items: action.result.MRData.RaceTable.Races, season: action.result.MRData.RaceTable.season};
        default:
            return state;
    }
}