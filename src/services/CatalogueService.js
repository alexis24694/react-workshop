
const getAllProgramTypes = () => {
    let endpoint = 'http://localhost:3000/programTypes';
    return fetch(endpoint)
        .then(response => response.json());
}


const getAllSeries = () => {
    let endpoint = 'http://localhost:3000/catalogue?q=series';
    return fetch(endpoint)
        .then(response => response.json());
}


const getAllMovies = () => {
    let endpoint = 'http://localhost:3000/catalogue?q=movie';
    return fetch(endpoint)
        .then(response => response.json());
}

export {
    getAllProgramTypes,
    getAllSeries,
    getAllMovies,
};