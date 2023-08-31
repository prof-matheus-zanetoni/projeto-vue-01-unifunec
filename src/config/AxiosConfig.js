import axios from "axios"

const instanciaAxios = axios.create({
    baseURL: "http://localhost/calculadora/"
})

export default instanciaAxios