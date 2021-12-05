const detailContainer = document.querySelector(".about");
const url = "https://www.floewerpoewer.one/wp-json/wp/v2/pages/14";

async function fetchDetails() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        createHtml(details);
      
    }
    catch(error) {
        console.log(error);
    }
    
}
fetchDetails();

function createHtml(details) {
    detailContainer.innerHTML += `
    <p>${details.content.rendered}</p>
    `                             
} 