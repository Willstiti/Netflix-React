const myUrl = "http://localhost:3000/api/movies"
import axios from 'axios';

export const getMovies = async () =>{
    const data = await axios.get(myUrl)

    console.log(data)
}

export const insertMovies = async (newMovies)=>{
    const data = await axios.post(myUrl, newMovies, {headers : {'Content-Type' : "application/json"}})
}