import axios from 'axios';


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'en',
        access_token: 'pk.eyJ1IjoianVhbm1hcGVyIiwiYSI6ImNsNXYzaG9hZjAxbTgzZGxjNjYwNXM1MTIifQ.-oX65tNNjHYyvjdvuftSbg'
    }
});


export default searchApi;