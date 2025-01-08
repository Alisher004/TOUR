import axios from "axios";

let ali = axios.create({
    baseURL: "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/services",
    headers: {
        "Content-Type": "applicotion/json",
    }
})

export default ali