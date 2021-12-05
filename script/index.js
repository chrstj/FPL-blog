const postContainer = document.querySelector(".latest");
const baseUrl = "https://www.floewerpoewer.one/wp-json/wp/v2/posts?_embed&per_page=3";
const morePosts = document.querySelector(".morePosts");

async function getProducts(url){
    const response = await fetch(url);
    const details = await response.json();
    console.log(url);
    details.forEach(function(detail){
        postContainer.innerHTML += 

        `<div>
        <a href="post-specific.html?id=${detail.id}">
        <div> <img src="${detail._embedded['wp:featuredmedia']['0'].source_url}" alt="${detail._embedded['wp:featuredmedia']['0'].alt_text}></div>
        <div class="product"><h2>${detail.title.rendered}</h2>
        </div>`
        
        
    })
}

getProducts(baseUrl);


morePosts.onclick = function () {
    location.href = "post-list.html";
};