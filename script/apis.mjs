import { renderNewsContent, renderfixturesContent } from "./utilis.mjs";

export  async function getApi(data){
    try {
      const response = await fetch(data);
      const result = await response.json();
      renderNewsContent(result)
    } catch (error) {
      console.error(error);
    }
    
  
  }

  export  async function randomApi(data){
    try {
      const response = await fetch(data);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    
  
  }

  export async function rapidApi(url, host) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c3578ae535mshba0d312a7069e5fp1504e7jsn59cf1d415a95',
        'X-RapidAPI-Host': host
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      renderfixturesContent(result)
      console.log(result)
    } catch (error) {
      console.error(error);
    }
    
  }
  



