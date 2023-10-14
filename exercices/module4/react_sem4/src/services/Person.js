import axios from 'axios'

const getAll = () => {
    const response = axios.get('http://localhost:3001/persons')
    return response.then(response => response.data) ;
}

const addOne=(person) => {
    const request = axios.post('http://localhost:3001/persons',person)
    return request.then(response => response.data) ;
}

export default {getAll,addOne} ;