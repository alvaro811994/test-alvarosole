import axios from "axios";
import expect from "expect";

require('dotenv').config()

async function testApi() {

const BASE_URL: string = "https://fakestoreapi.com"
const ENDPOINT: string = "/auth/login"
const USERTEST: string = "mor_2314"
const PASSWORD: string = "83r5^_"
const PAYLOAD = {
    "username" : USERTEST,
    "password" : PASSWORD
}

const response = await axios.post(BASE_URL + ENDPOINT, PAYLOAD);
console.log(response.data.token)
const status = response.status
expect(status).toEqual(200)

}

testApi();
