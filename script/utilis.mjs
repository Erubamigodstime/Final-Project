
function timeAgo(publishedAt) {
  let publishedDate = new Date(publishedAt);
  let currentDate = new Date();
  let differenceInMilliseconds = currentDate - publishedDate;
  let differenceInSeconds = differenceInMilliseconds / 1000;
  let differenceInMinutes = differenceInSeconds / 60;
  let differenceInHours = differenceInMinutes / 60;
  let differenceInDays = differenceInHours / 24;
  let differenceInWeeks = differenceInDays / 7;

  if (differenceInHours < 24) {
      return Math.floor(differenceInHours) + " hours ago";
  } else if (differenceInDays < 7) {
      return Math.floor(differenceInDays) + " days ago";
  } else {
      return Math.floor(differenceInWeeks) + " weeks ago";
  }
}
 function newsDisplayTemplate(data) {
 return `
 <div class="single-news">
 <div class="news-img">
   <img styles="width:100%; height:100%"  src="${data.urlToImage}" alt="news image">
 </div>
 <div class="news-text">
   <p>${data.title}</p>
   <small>${timeAgo(data.publishedAt)}</small>
   
   <a href="${data.url}" target="_blank" class="news-btn"  >Read More >></a>
 </div>

</div>
  
  `
}



// function fixturesDisplayTemplate(data){
// return`
// <div class="single-fixture" id="single-fixture">
//   <table>          
     
//               <tr>                     
//                   <td class="teamA"> ${data.teamA}</td>
//                   <td class="time">${data.time}</td>
//                   <td class="teamB>${data.teamB}</td>
//               </tr>                       
                  
//     </table>
//   </div>`  


// }
      

 export function renderNewsContent(data) {
  
  const htmlItems = data.articles.filter(item => item.urlToImage && item.title && item.description && item.url && item.publishedAt).map((item) => newsDisplayTemplate(item)); 
  document.querySelector("#news-container").innerHTML=htmlItems.join("");
	
}
export function renderWithTemplate(templateFn, parentElement,  position="afterbegin", clear=false){
    if (clear) {
      parentElement.innerHTML = "";
    }

    parentElement.insertAdjacentHTML(position,templateFn);
    
}

// export function renderfixturesContent(data) {
  
//   const htmlItems = data.filter(item => item.time && item.teamA && item.teamB).map((item) => fixturesDisplayTemplate(item)); 
//   document.querySelector("#fixture-table").innerHTML=htmlItems.join("");
	
// }


export async function loadTemplate(path) {
  const res = await fetch(path, { headers: { 'Content-Type': 'text/html' } });  
  const template = await res.text();
  return template;
}

export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate("/partials/header.html");
  const headerElement = document.querySelector("#main-header");
  const footerTemplate = await loadTemplate("/partials/footer.html");
  const footerElement = document.querySelector("#main-footer");

  renderWithTemplate(headerTemplate, headerElement)
  renderWithTemplate(footerTemplate, footerElement)


}

export function renderfixturesContent(fixtureData){
const table = document.getElementById('fixture-table');

fixtureData.forEach((fixture) => {
  const row = table.insertRow(); 
  const teamACell = row.insertCell();
  const timeCell = row.insertCell();
  const teamBCell = row.insertCell();
  const statusCell = row.insertCell();

  teamACell.textContent = fixture.teamA;
  timeCell.textContent = fixture.time;
  teamBCell.textContent = fixture.teamB;
  statusCell.textContent = fixture.status;
  timeCell.classList.add("time-column");
});

}

