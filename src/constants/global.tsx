const hostServer = "http://localhost:8090";

const globalHeaders = () => {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*')
    headers.append('Access-Control-Allow-Headers', '*')
    return headers;
}

const headerOptions = (methodType: String, headers: any) => {
    const options = {
        method: methodType,
        mode: 'cors',
        headers
    }
    return options;
}

const headerOptionDefaultGET = () => {
    const options = {
        method: 'GET',
        mode: 'cors',
        globalHeaders
    }
    return options;
}

const headerOptionDefaultPOST = () => {
    const options = {
        method: 'POST',
        mode: 'cors',
        globalHeaders
    }
    return options;
}

export { hostServer, headerOptions, globalHeaders, headerOptionDefaultGET, headerOptionDefaultPOST }