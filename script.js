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

//** setInterval, JavaScript'te bir fonksiyonu belirli bir aralıkla (bu örnekte 1000 milisaniye) çalıştıran bir fonksiyondur. */
setInterval(function showDate() {
  // **  setInterval içinde her saniye çalıştırılacak fonksiyonu tanımlar.
  const specificDate = new Date().toLocaleString("en-GB");
  //** new Date() ile geçerli tarih ve saat oluşturuluyor. toLocaleString("en-GB") metodu, tarihi İngiltere'nin tarih formatına (gün/ay/yıl saat:dakika:saniye) uygun bir şekilde döndürür. */
  title.textContent = specificDate;
  //** textContent, bu öğenin içerisine specificDate'i yerleştirir, yani her saniye geçerli tarih ve saat, belirtilen öğenin metni olarak güncellenir. */
}, 1000);

//! Change Screen
//** Belirtilen bir süre sonra yalnızca bir kez çalışacak bir fonksiyon çalıştırır. */
setTimeout(function changeScreen() {
  //** setTimeout fonksiyonu içinde çalışacak olan fonksiyondur. */
  loadingDiv.style.display = "none";
  //** loadingDiv, yüklenme sırasında görünen öğeyi temsil eder. Bu öğe genellikle bir "loading" animasyonu veya mesajı olabilir. style.display = "none" ifadesi, bu öğeyi gizler. Yani, yükleme ekranı 3 saniye sonra görünmez olacaktır. */
  containerDiv.style.display = "flex";
  //** containerDiv, asıl içeriği (örneğin bir sayfa veya uygulama ekranı) temsil eden öğedir. style.display = "flex" ifadesi, bu öğeyi görünür hale getirir ve düzenini flex olarak ayarlar. Yani, öğe görünür olacak ve esnek bir düzen içinde yer alacaktır.  */
}, 3000);

//! Fetch

//** Bu, takeData adlı bir fonksiyon tanımlar. Bu fonksiyon, API'den veri almayı, veriyi işlemeyi ve yükleme veya hata durumlarını yönetmeyi içerir. */
const takeData = () => {
  //** imgContainer, verilerin yükleneceği HTML öğesidir (muhtemelen bir <div> veya benzeri bir öğe). innerHTML ile bu öğenin içeriği güncellenir. İçeriğe, kullanıcıya verilerin yüklendiği esnada bir "yükleniyor" görseli gösteren bir <img> etiketi eklenir. */
  imgContainer.innerHTML = `<img src="${loadingImagePath}" alt="Loading..." class="loadingImg"/>`;
  //** fetch, belirli bir URL'ye HTTP isteği gönderen bir JavaScript fonksiyonudur. */
  fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((result) => {
      //** fetch fonksiyonu, bir Promise döndürür ve .then() metodu bu Promise tamamlandığında çalıştırılacak fonksiyonu tanımlar. Burada, önce gelen result (sonuç) kontrol edilir. Eğer result.ok değeri false ise (yani API'den gelen yanıt bir hata içeriyorsa), bir hata fırlatılır (throw new Error();). Eğer yanıt başarılıysa, .json() metodu kullanılarak yanıt JSON formatına dönüştürülür. */
      if (!result.ok) {
        throw new Error();
      }
      return result.json();
    })
    //** data, API'den gelen JSON verisidir. Burada, bu verinin showOn fonksiyonuna iletilmesi sağlanır. showOn fonksiyonu, veriyi uygun bir şekilde kullanıcıya göstermek için kullanılacaktır */
    .then((data) => {
      showOn(data);
    })
    //** .catch() metodu, fetch işlemi sırasında herhangi bir hata oluşursa çalıştırılacak fonksiyonu tanımlar. Eğer bir hata oluşursa, imgContainer öğesine hata durumunu belirtmek için başka bir görsel eklenir. Bu görsel, errorImagePath ile belirtilen hata görseli olur. */
    .catch((error) => {
      imgContainer.innerHTML = `<img src="${errorImagePath}" alt="Error Image" class="errorImg"/>`;
      console.error("Hata:", error.message);
    });
};
//** Bu, cats adlı bir parametre alan arrow function. cats.map() metodu, cats dizisindeki her bir öğe üzerinde bir işlem gerçekleştirir ve yeni bir dizi döndürür. Bu örnekte, her bir cat nesnesi için bir <img> etiketi oluşturuluyor. map() tarafından oluşturulan <img> etiketleri dizisi, .join("") ile tek bir metin dizisine birleştirilir. map() bir dizi döndürür, ancak HTML'e eklemek için tek bir metin dizisi gerekir. join(""), diziyi boş bir karakterle birleştirerek tüm <img> etiketlerini bir arada tutar. */
const showOn = (cats) => {
  imgContainer.innerHTML = cats
    .map((cat) => `<img src="${cat.url}" alt="Cat Image" class="catImg"/>`)
    .join("");
};
takeData();

button.addEventListener("click", (e) => {
  takeData();
});
