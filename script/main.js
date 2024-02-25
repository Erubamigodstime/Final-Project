import { loadHeaderFooter  } from "./utilis.mjs";
import { getApi, rapidApi  } from "./apis.mjs";
import {  slider} from "./slider";
loadHeaderFooter();


slider();
const url = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=beda954c47f74560a55aa934f9f0b0ce'
getApi(url);

const rapiUrl = 'https://football_api12.p.rapidapi.com/players/fixtures';

rapidApi(rapiUrl);


// beda954c47f74560a55aa934f9f0b0ce newsapi.org api key