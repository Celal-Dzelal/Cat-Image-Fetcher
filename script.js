//! Variables

const loadingDiv = document.querySelector(".loadingDiv");
const containerDiv = document.querySelector(".containerDiv");
const title = document.querySelector(".title");
const button = document.querySelector(".button");
const imgContainer = document.querySelector(".imgContainer");
const box = document.querySelector(".box");
const loadingImagePath = "./image/loading.gif";
const errorImagePath = "./image/error.gif";

//! Date

setInterval(function showDate() {
  const specificDate = new Date().toLocaleString("en-GB");
  title.textContent = specificDate;
}, 1000);

//! Change Screen

setTimeout(function changeScreen() {
  loadingDiv.style.display = "none";
  containerDiv.style.display = "flex";
}, 3000);

//! Fetch

const takeData = () => {
  imgContainer.innerHTML = `<img src="${loadingImagePath}" alt="Loading..." class="loadingImg"/>`;
  fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((result) => {
      if (!result.ok) {
        throw new Error();
      }
      return result.json();
    })
    .then((data) => {
      showOn(data);
    })
    .catch((error) => {
      imgContainer.innerHTML = `<img src="${errorImagePath}" alt="Error Image" class="errorImg"/>`;
      console.error("Hata:", error.message);
    });
};

const showOn = (cats) => {
  imgContainer.innerHTML = cats
    .map((cat) => `<img src="${cat.url}" alt="Cat Image" class="catImg"/>`)
    .join("");
};
takeData();

button.addEventListener("click", (e) => {
  takeData();
});
