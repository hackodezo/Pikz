import axios from 'axios'

export default  axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9c0063014cc13a887ed86b144e9775cafb68accfb8303020a683513ec005baa0'
    }
});