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

// Create dynamically the article items
function createElement(type, classNames) {
  const element = document.createElement(type);

  if ("undefined" === typeof classNames) {
    return element;
  }

  if ("string" === typeof classNames) {
    classNames = [classNames];
  }

  classNames.forEach(function(className){
    element.classList.add(className);
  });

  return element;
};

function createHTML() {
  const article = createElement("article", "item-compare");
  const div = createElement("div", "header-footer");
  const links = createElement("div", "header-footer");
  const h3 = createElement("h3");
  const h4 = createElement("h4");
  const img = createElement("img");
  const a = createElement("a");
  const strong = createElement("strong");
  const heart = createElement("a", "heart-shape");

  h3.innerText = "Satin Lipstick"
  h4.innerText = "MAC"
  img.src = "Logos/labial.jpg";
  img.alt = "";
  a.href = "compare.html";
  strong.innerText = "Compara &dollar; &rarr;";
  heart.href = "#";

  div.appendChild(h3);
  div.appendChild(h4);

  a.appendChild(strong);
  links.appendChild(heart);
  links.appendChild(a);

  article.appendChild(div);
  article.appendChild(img);
  article.appendChild(links);

  return article;
};

const section = document.getElementsByClassName("compare-article")[0];

for (var i=0;i < 12;i++) {
  section.appendChild(createHTML());
}
