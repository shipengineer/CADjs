import { fetchData } from "./data.js";
const images = await fetchData();
images.forEach((image) => {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <div class ='wrap' id=${image.id}>
    <img src="${image.thumbnailUrl}"/>
    <p>${image.title}</p> 
    </div>`
  );
});
