export function raceItems(state = {items:[]}, action) {
    switch (action.type) {
        case 'Race_Year_dataSuccess':
            return {...state, items: action.result.MRData.SeasonTable.Seasons};
        default:
            return state;
    }
}