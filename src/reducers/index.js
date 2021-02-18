const initialState = {
    coord: {
        lon: 21.0118,
        lat: 52.2298,
    },
    weather: [
        {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
        },
    ],
    base: 'stations',
    main: {
        temp: -3.31,
        feels_like: -9.62,
        temp_min: -5,
        temp_max: -2.22,
        pressure: 1024,
        humidity: 59,
    },
    visibility: 10000,
    wind: {
        speed: 4.63,
        deg: 110,
    },
    clouds: {
        all: 0,
    },
    dt: 1613649175,
    sys: {
        type: 1,
        id: 1713,
        country: 'PL',
        sunrise: 1613627138,
        sunset: 1613663665,
    },
    timezone: 3600,
    id: 756135,
    name: 'Warsaw',
    cod: 200,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default rootReducer
