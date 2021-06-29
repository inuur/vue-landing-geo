import axios from 'axios'

export default function () {

    const PORT = process.env.PORT || 5000;

    const config = {
        withCredentials: true,
        baseURL: `http://localhost:${PORT}`,
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
        },
    }

    return axios.create(config);
}
