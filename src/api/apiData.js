
export const fetchData = async (url) => {
    try {
        const response = await fetch(url); // variable to store the response from the fetch request
        const data = await response.json(); // data converted to json
        return data; // return the data
    }
    catch (error) {
        console.log(error);
    }
}


