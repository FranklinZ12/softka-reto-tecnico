const baseUrl = process.env.REACT_APP_API_URI;

const fetchNaves = async(endpoint)=>{
    const respuesta = await fetch(`https://api-softk-reto.herokuapp.com/api${endpoint}`);
    const data = await respuesta.json();
    return data;
}

const fetchNavesById = async(endpoint)=>{
    const respuesta = await fetch(`https://api-softk-reto.herokuapp.com/api${endpoint}`);
    const data = await respuesta.json();
    return data;
}

const fetchPost = async(endpoint, data)=>{
    const respuesta = await fetch(`https://api-softk-reto.herokuapp.com/api${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const data2 = await respuesta.json();
    return data2;
}
export { fetchNaves, fetchNavesById, fetchPost }