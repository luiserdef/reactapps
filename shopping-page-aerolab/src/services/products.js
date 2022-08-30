
const url='https://coding-challenge-api.aerolab.co/products'
const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzBkNzAyYjUyZDYyYjAwMjFhOTk0ZWEiLCJpYXQiOjE2NjE4MjUwNjd9.zr3pztq1VnThUE1J6RrMNIl_-SWbqR3SxbHU_j0eLbc'

const headers ={
    headers:{
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Authorization':'Bearer '+ Token
    }
}

export const getProducts= fetch(url,headers)
                        .then(response=>response.json())
                        .then(data=>data)


