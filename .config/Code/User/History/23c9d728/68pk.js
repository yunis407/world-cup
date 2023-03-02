const url = "http://localhost:3000/characters";
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch(url)
    .then((resp) => resp.json())
    .then((characters) => renderAnimals(characters));
  return renderAnimals;
}
​
function renderAnimals(characters) {
  const box = document.getElementById("box")
const form = document.createElement('div');
form.innerHTML = `
<div class="container">
      <form method="post">
        <label for="animalname">Animal Name</label>
        <input type="text" id ="animalname"placeholder="Animal name..">
    
        <label for="url">Image Url</label>
        <input type="text" id = "url" placeholder="image url">
    
       
        <input type="submit" value="Submit">
      </form>
    </div>
`
  const main = document.querySelector("main");
  characters.forEach((animal) => {
    const h2 = document.createElement("h2");
    h2.className = "li";
    h2.addEventListener("click", () => {
      if (animal.id === 1) {
        getMrCute();
      } else if (animal.id === 2) {
        getMxMonkey();
      } else if (animal.id === 3) {
        getMsZebra();
      } else if (animal.id === 4) {
        getDrLion();
      } else if (animal.id === 5) {
        getMmePanda();
      }
    });
    
    h2.innerHTML = animal.name;
    main.appendChild(h2);
    main.appendChild(form);
    
    
  });
}
​
//getting Mr Cute
function getMrCute() {
  fetch(url)
    .then((resp) => resp.json())
    .then((result) => {
      const obj = result[0];
      const card = document.getElementsByClassName("demo");
      let button = document.createElement("button");
      button.addEventListener("click", deleteBox);
      button.id = "back";
      button.textContent = "BACK";
      let list = document.createElement("div");
      list.className = "card";
      list.innerHTML = `
      <img id="pic" src="${obj.image}"/>
    <div class="details">
     <h2 id = "name">${obj.name}</h2>
     <h2 id= "totalvotes" >Votes:  ${obj.votes}</h2>
     <div id = "votes">
     <button onclick="tallyingVotes(${obj.votes})" id = "btn">VOTE</button>
    </div>
    </div>
    `;
​
      document.querySelector("#demo").appendChild(list);
      list.appendChild(button);
    });
  let e = document.querySelector("main");
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}
​
//getting Mx Monkey
function getMxMonkey() {
  fetch(url)
    .then((resp) => resp.json())
    .then((result) => {
      const obj = result[1];
      const card = document.getElementsByClassName("demo");
      let button = document.createElement("button");
      button.addEventListener("click", deleteBox);
      button.id = "back";
      button.textContent = "BACK";
      let list = document.createElement("div");
      list.className = "card";
      list.innerHTML = `
      <img id="pic" src="${obj.image}"/>
      <div class="details">
       <h2 id = "name">${obj.name}</h2>
       <h2 id= "totalvotes" >Votes:  ${obj.votes}</h2>
       <div id = "votes">
       <button onclick="tallyingVotes(${obj.votes})" id = "btn">VOTE</button>
      </div>
      </div>
    `;
      document.querySelector("#demo").appendChild(list);
      list.appendChild(button);
    });
  let e = document.querySelector("main");
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}
​
//getting Ms Zebra
function getMsZebra() {
  fetch(url)
    .then((resp) => resp.json())
    .then((result) => {
      const obj = result[2];
      const card = document.getElementsByClassName("demo");
      let button = document.createElement("button");
      button.addEventListener("click", deleteBox);
      button.id = "back";
      button.textContent = "BACK";
      let list = document.createElement("div");
      list.className = "card";
      list.innerHTML = `
      <img id="pic" src="${obj.image}"/>
    <div class="details">
     <h2 id = "name">${obj.name}</h2>
     <h2 id= "totalvotes" >Votes:  ${obj.votes}</h2>
     <div id = "votes">
     <button onclick="tallyingVotes(${obj.votes})" id = "btn">VOTE</button>
    </div>
    </div>
    `;
      document.querySelector("#demo").appendChild(list);
      list.appendChild(button);
    });
  let e = document.querySelector("main");
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}
​
//getting Dr Lion
function getDrLion() {
  fetch(url)
    .then((resp) => resp.json())
    .then((result) => {
      const obj = result[3];
      const card = document.getElementsByClassName("demo");
      let button = document.createElement("button");
      button.addEventListener("click", deleteBox);
      button.id = "back";
      button.textContent = "BACK";
      let list = document.createElement("div");
      list.className = "card";
      list.innerHTML = `
      <img id="pic" src="${obj.image}"/>
      <div class="details">
       <h2 id = "name">${obj.name}</h2>
       <h2 id= "totalvotes" >Votes:  ${obj.votes}</h2>
       <div id = "votes">
       <button onclick="tallyingVotes(${obj.votes})" id = "btn">VOTE</button>
      </div>
      </div>
    `;
      document.querySelector("#demo").appendChild(list);
      list.appendChild(button);
    });
  let e = document.querySelector("main");
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}
​
//getting Mme Panda
function getMmePanda() {
  fetch(url)
    .then((resp) => resp.json())
    .then((result) => {
      const obj = result[4];
      const card = document.getElementsByClassName("demo");
      let button = document.createElement("button");
      button.addEventListener("click", deleteBox);
      button.id = "back";
      button.textContent = "BACK";
      let list = document.createElement("div");
      list.className = "card";
      list.innerHTML = `
      <img id="pic" src="${obj.image}"/>
    <div class="details">
     <h2 id = "name">${obj.name}</h2>
     <h2 id= "totalvotes" >Votes:  ${obj.votes}</h2>
     <div id = "votes">
     <button onclick="tallyingVotes(${obj.votes})" id = "btn">VOTE</button>
    </div>
    </div>
    `;
      document.querySelector("#demo").appendChild(list);
      list.appendChild(button);
    });
  let e = document.querySelector("main");
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}
​
function deleteBox(e) {
  e.target.parentNode.remove();
  return fetchBooks();
}
​
function tallyingVotes(obj) {
    fetch(url)
    .then((resp) => resp.json())
    .then((result) => {
  let text = document.querySelector("#totalvotes")
  text = `Votes: ${obj + 1}`;
  return document.querySelector("#totalvotes").textContent = text;})
}
​
​
​
​
document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
  tallyingVotes();
});
Collapse



