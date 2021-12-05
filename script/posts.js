const postContainer = document.querySelector(".posts");
const baseUrl = "https://www.floewerpoewer.one/wp-json/wp/v2/posts?_embed";
const viewMore = document.querySelector(".viewMore");

async function getPosts(url){
    const response = await fetch(url);
    const details = await response.json();
    console.log(url);
    details.forEach(function(detail){
        postContainer.innerHTML += `
        <a href="post-specific.html?id=${detail.id}">
        <div> <img src="${detail._embedded['wp:featuredmedia']['0'].source_url}" alt="${detail._embedded['wp:featuredmedia']['0'].alt_text}></div>
        <div class="products"><h2>${detail.title.rendered}</h2>`
    })
}

getPosts(baseUrl);

viewMore.onclick = function(){
    const newUrl = "https://www.floewerpoewer.one/wp-json/wp/v2/posts?_embed&per_page=12";
    postContainer.innerHTML = "";
    viewMore.style.display = 'none';
    getPosts(newUrl);

}


    
   
