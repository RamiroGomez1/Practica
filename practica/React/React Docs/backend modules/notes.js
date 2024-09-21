//Este archivo es un modulo

//Este modulo devuelve un objeto que tiene tres funciones (getAll, create, update)

//Estas funciones se devuelven como propiedades que se ocupan de las notas 

import axios from 'axios'
const basUrl = 'http://localhost:3001/notes'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

export default {
    getAll: getAll,
    create: create,
    update: update
}

//