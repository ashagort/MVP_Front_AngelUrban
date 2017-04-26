
export function DriverItems(state = {items: []}, action) {
    switch (action.type) {
        case 'Driver_Race_Succes':
            return {...state, items:[ ...action.result.MRData.DriverTable.Drivers, ...state.items]};
        case 'Add_Drive_Sucess':
            let ndriver=
                {
                    dateOfBirth: "1918-07-13",
                    driverId: action.result.driverName,
                    familyName: action.result.driverName,
                    givenName: action.result.driverName,
                    nationality: "tututututututut",
                    url: "http://en.wikipedia.org/wiki/Alberto_Ascari"
                }
            ;
            return {...state, items: [...state.items,ndriver]};
        default:
            return state;
    }
}