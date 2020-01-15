import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.thebigo.it/wp-json/wp/v2'
});