import axios from "axios";

const BASE_URL = 'http://localhost:5500/api/lists'

let token = '';
const AUTH = JSON.parse(window.localStorage.getItem("authData"));

if(AUTH.accessToken !== null) {

    token = "Bearer " + AUTH.accessToken;

}


export const getList = async (type) => {

    await axios.get(BASE_URL + "?type=" + type, {
        headers: {
            token:token
        }
    }).then((res) => {
        console.log(res.data);
        return res.data;
    })
        .catch((err) => console.log(err))
}