async function retrieveData(url, callback) {
    try {
        const getResponse = await fetch(url);
        if (getResponse.ok) {
            const info = await getResponse.json();
            console.log("Fetched data:", info); // Log the fetched data
            callback(info); // Call the callback function with the fetched data
        } else {
            throw Error(await getResponse.text());
        }   
    } catch(error) {
        console.log("Error fetching data:", error);
    }
}

export { retrieveData };
