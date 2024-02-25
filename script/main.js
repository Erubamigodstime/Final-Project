import { loadHeaderFooter  } from "./utilis.mjs";
import { getApi, rapidApi  } from "./apis.mjs";
import axios from 'axios';
import {  slider} from "./slider";
loadHeaderFooter();


slider();
const url = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=beda954c47f74560a55aa934f9f0b0ce'

// const url = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=beda954c47f74560a55aa934f9f0b0ce'
getApi(url);

const rapiUrl = 'https://football_api12.p.rapidapi.com/players/fixtures';

rapidApi(rapiUrl);


// beda954c47f74560a55aa934f9f0b0ce newsapi.org api key


async function testFunc() {
    const testUrl = 'https://football_api12.p.rapidapi.com/players/news';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c3578ae535mshba0d312a7069e5fp1504e7jsn59cf1d415a95',
            'X-RapidAPI-Host': 'football_api12.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.get(testUrl, options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

testFunc();


