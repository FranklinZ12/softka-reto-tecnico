const baseUrl = process.env.REACT_APP_API_URI;

const fetchNotripulado = async(endpoint)=>{
    const respuesta = await fetch(`https://api-softk-reto.herokuapp.com/api${endpoint}`);
    const data = await respuesta.json();
    return data;
}
export { fetchNotripulado }