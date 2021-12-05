const detailContainer = document.querySelector(".post-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://www.floewerpoewer.one/wp-json/wp/v2/posts/" + id;

async function fetchDetails() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);
      
    }
    catch(error) {
        console.log(error);
    }
    
}
fetchDetails();

function createHtml(details) {
    detailContainer.innerHTML += `
   <h1>${details.title.rendered}</h1>
    <div class="content">${details.content.rendered}</div>
    `                       
} 

