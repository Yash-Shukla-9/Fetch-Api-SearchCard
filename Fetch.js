async function FetchData() {
  const response = await fetch("https://dummyjson.com/products");

  const result = await response.json();

  return result;
}

FetchData();

async function call() {
  save = await FetchData();

  for (let key in save) {
    let ss = save.products.forEach((item) => {
      console.log(item.title);
    });
  }
}

call();
const Main = document.getElementById("Box");
let Store = [];

async function DisplayCheck() {
  const Store = await FetchData();

  const SeacrhInput = document.getElementById("Input");
  SeacrhInput.addEventListener("input", () => {
    Main.innerHTML = "";
    let check = SeacrhInput.value.trim().toLowerCase();

    Store.forEach((item) => {
      if (item.title.toLowerCase().includes(check)) {
        ShowCard(item);
      }
    });
  });

  function ShowCard(item) {
    const Card = document.createElement("div");
    Card.className = "Crd";
    console.log(item);
    const Container = document.createElement("div");
    const title = document.createElement("p");
    const price = document.createElement("p");
    Container.className = "contain";
    const img = document.createElement("img");
    img.className = "imgcls";
    img.src = item.image;
    img.alt = "FakeImage";
    title.innerText = `TItle :- ${item.title}`;
    price.innerText = `Price :- ${item.price}`;
    img.innerText = `${item.image}`;
    Card.appendChild(img);
    Container.appendChild(title);
    Container.appendChild(price);
    Card.appendChild(Container);
    Main.appendChild(Card);
  }

  Store.forEach((item) => {
    ShowCard(item);
  });
}

DisplayCheck();

// TODO :  Making the card function independent
