import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchJSON, articlesRoute} from './config';
// read data for a specific key stored in AsyncStorage (local storage)
export const readData = async (key) => {
    const data = await AsyncStorage.getItem(key);
    try {
        return JSON.parse(data);
    }
    catch (err) {
        console.log(`Could not parse the data for ${key}: ${err}`);
        console.log(`Data: ${data}`);
        if (typeof data === 'string') {
            return data;
        }
        return err;
    }
}

// write data to a specific key in AsyncStorage (local storage)
export const writeData = async (key, value) => {
    try {
        if (typeof value === 'string') {
            await AsyncStorage.setItem(key, value);
            return true;
        }
        const storedValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, storedValue);
        return true;
    }
    catch (err) {
        console.log(`Could not store data for ${key}: ${err}`);
        return err;
    }
}

// If articles are store locally, read them from local storage
// otherwise send an API call and then store the result locally
// and return the result
export const readArticles = async (override) => {
    // return the results of the main promise
    return await readData('articles')
    .then((result) => {
        if (override !== true && Array.isArray(result) && result.length > 0) {
            console.log('Articles came from storage');
            return result;
        }
        // return a promise
        return fetchJSON(articlesRoute)
        .then((data) => {
            // what is the actual key i want to use here?
            writeData('articles', data.articles);
            console.log('Articles refreshed from API.');
            return data.articles;
        })
        .catch((err) => {
            console.log('Could not fetch articles: ', err);
        })

    })
}