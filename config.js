export const apiKey = `67752668abc440628948a2c544e6cfb9`;
export const baseRoute = `https://newsapi.org/v2`;
export const sourceRoute = `${baseRoute}/sources?apiKey=${apiKey}&language=en&country=us`
export const articlesRoute = `${baseRoute}/top-headlines?country=us&apiKey=${apiKey}`;

// we want to make this asynchronous
export const fetchJSON = async (route) =>
{
    if (typeof route !== 'string' && route !== '') {
        return new Error("Route must be a string.");
    }
    // validate url format? that would be complex
    return await fetch(route)
    .then((response) => 
    {
        if (response.status === 200) {
            try {
                return response.json();
            }
            catch (err) {
                console.error('Could not return json: ', err);
                return err;
            }
        }
        return new Error('Failed response: ', response);
    })
}

