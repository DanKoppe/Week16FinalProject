async function fetchAPI(url, options) {

    try {

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`action ${options.method}; status: ${response.status}`);
        }

        const responseData = await response.json();

        return responseData;

    } catch (error) {
        
        throw new Error(error.message)
    }
}

export { fetchAPI }