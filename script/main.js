import { loadHeaderFooter  } from "./utilis.mjs";
import {  rapidApi, getApi, randomApi } from "./apis.mjs";
// import axios from 'axios';
import {  slider} from "./slider";
loadHeaderFooter();


slider();
const url = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=beda954c47f74560a55aa934f9f0b0ce'

getApi(url);

// const rapiUrl = 'https://football_api12.p.rapidapi.com/players/fixtures';
// const host = 'football_api12.p.rapidapi.com';
const rapiUrl = 'https://premier-league-player-and-club-statistics.p.rapidapi.com/category/clubs';
const host =  'premier-league-player-and-club-statistics.p.rapidapi.com';

rapidApi(rapiUrl, host);
// rapidApi(rapiUrl_2, host_2);


// beda954c47f74560a55aa934f9f0b0ce newsapi.org api key





