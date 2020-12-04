const $forms = document.querySelectorAll(".signup-form");

const getTemplate = () => {
  return fetch("./template.html").then((response) => response.text());
};

const sendEmailToApi = (address, template) => {
  fetch(`https://bedu-email-sender-api.herokuapp.com/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      address: address,
      template: template,
    }),
  })
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.error(error);
    });
};

const sendEmail = (event) => {
  event.preventDefault();
  const email = event.target.querySelector("input").value;
  getTemplate()
    .then((template) => {
      sendEmailToApi(email, template);
    })
    .catch((error) => {
      console.log(error, "error al convertir el template.");
    });
};

for (let i = 0; i < $forms.length; i++) {
  $forms[i].addEventListener("submit", sendEmail);
}

/***************Mi codigo*****************************/

const mainText = document.getElementById("mainText");
mainText.addEventListener("click", function () {
  this.style.color = "black";
})

var Data = function (nameProduct, tradeMark, imgSrc, imgAlt) {
    this.nameProduct = nameProduct;
    this.tradeMark = tradeMark;
    this.imgSrc = imgSrc;
    this.imgAlt = imgAlt;
}

function createElements(tag,text) {
  const element = document.createElement(tag);
  if(typeof text !== "undefined") {
    element.innerText = text;
  }
  return element;
}

function createSection (productOne) {
    var article = document.createElement("article");
    var firstSection = document.createElement("div");
    var secondSection = document.createElement("img");
    var threeSection = document.createElement("div");

    var h3 = createElements("h3",productOne.nameProduct);
    var h4 = createElements("h4",productOne.tradeMark);

    var link1 = document.createElement("a");
    var strong = document.createElement("strong");
    var link2 = document.createElement("a");

    article.className = "item-compare";
    firstSection.className = "header-footer";
    secondSection.src = productOne.imgSrc;
    secondSection.scr = productOne.imgAlt;
    threeSection.className = "header-footer";

    link1.href = "compare.html";
    link2.href = "#";
    link2.className = "heart-shape";
    strong.innerText = "Compara $";
    link1.appendChild(strong);

    firstSection.appendChild(h3);
    firstSection.appendChild(h4);

    threeSection.appendChild(link1);
    threeSection.appendChild(link2);

    article.appendChild(firstSection);
    article.appendChild(secondSection);
    article.appendChild(threeSection);

    return article;
}

const section = document.getElementById("compareArticle");
var productOne = new Data("Satin Lipstick","MAC","Logos/labial.jpg","Labial MAC");
var productTwo = new Data("Cremated Palette","Jeffree Star","Logos/paletaSombras.jpeg", "Sombras de ojos");
for(var i=0; i<6;i++)
{
  section.appendChild(createSection(productOne));
  section.appendChild(createSection(productTwo));
}
