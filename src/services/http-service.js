
const doGet = (url, options) => {
    return fetch(url, options);
}

const doPost = (url, body, options) => {
    return fetch(url, body, options);
}

export { doGet, doPost }