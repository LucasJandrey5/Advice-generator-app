const title = document.getElementsByTagName("h1");
const text = document.getElementsByTagName("p");

const callAdvice = async () => {
  fetch(`https://api.adviceslip.com/advice`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      title[0].innerHTML = "Advice #" + data.slip.id;

      text[0].innerHTML = '"' + data.slip.advice + '"';
    });
};

callAdvice();
