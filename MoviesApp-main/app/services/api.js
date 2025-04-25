const api_key = "4c80b76"

export async function searchMovies(searchTerm) {
    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${api_key}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error.message);
    }
};

export async function searchMovieByIMDBID(imdbID) {
    const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=${api_key}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error.message);
    }
};