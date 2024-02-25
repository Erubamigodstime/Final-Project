import { loadHeaderFooter  } from "./utilis.mjs";
import {  rapidApi, getApi, randomApi } from "./apis.mjs";
// import axios from 'axios';
import {  slider} from "./slider";
loadHeaderFooter();


const rapiUrl = 'https://football_api12.p.rapidapi.com/players/fixtures';
const host = 'football_api12.p.rapidapi.com';

slider();
// const url = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=beda954c47f74560a55aa934f9f0b0ce'
const url   = '/news.json'
randomApi();
getApi(url);



rapidApi(rapiUrl, host);







