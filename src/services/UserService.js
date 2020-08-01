
const getUserById = (id) => {
    let endpoint = `http://localhost:3000/users/${id}`;
    return fetch(endpoint)
        .then(response => response.json());
}

const searchUsers = (text) => {
    let endpoint = `http://localhost:3000/users?q=${text}`;
    return fetch(endpoint)
        .then(response => response.json());
}

const deleteUser = (id) => {
    let endpoint = `http://localhost:3000/users/${id}`;
    return fetch(endpoint, {
            method: 'delete'
        });
};

const createUser = (payload) => {
    let endpoint = `http://localhost:3000/users/`;
    return fetch(endpoint, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
        });
};

export {
    getUserById,
    searchUsers,
    deleteUser,
    createUser,
};