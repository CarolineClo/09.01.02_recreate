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
    //grab parent
    const parent = document.querySelector("main");

    //append
    parent.appendChild(copy);
  });
}
