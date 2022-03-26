/*
async function getData() {
  let result = await fetch(
    "https://carolineclo.dk/bikedata/wp-json/wp/v2/bike?_embed"
  );
  showPosts(await result.json());
}

function showPosts(posts) {
  console.log(posts);
}

getData();
*/

window.addEventListener("DOMContentLoaded", init);

function init(event) {
  getData();
}

async function getData(bikeData) {
  let result = await fetch(
    "https://carolineclo.dk/bikedata/wp-json/wp/v2/bike?_embed"
  );
  showPosts(await result.json());
}

function showPosts(bikeData) {
  console.log(bikeData);
  bikeData.forEach((singleBike) => {
    //grab template
    const template = document.querySelector("#bikesTemplate").content;

    //clone it
    const copy = template.cloneNode(true);

    //change it
    copy.querySelector(".brand h2").textContent = singleBike.title.rendered;
    copy.querySelector(".productCard img").src =
      singleBike._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.medium.source_url;
    copy.querySelector(".brand h3").textContent =
      singleBike._embedded["wp:term"][0][0].name;
    copy.querySelector(".price").textContent = "$" + singleBike.price;
    copy.querySelector(".colour").textContent = singleBike.colour;
    copy.querySelector(".stock").textContent = singleBike.number_in_stock;
    //grab parent
    const parent = document.querySelector(".productList");

    //append
    parent.appendChild(copy);
  });
}
