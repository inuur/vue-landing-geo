import axios from 'axios'

export default function () {

    const config = {
        withCredentials: true,
        baseURL: `https://${location.host}`,
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
        },
    }

    return axios.create(config);
}
