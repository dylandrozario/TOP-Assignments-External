const contentP1 = document.createElement("p");
container.appendChild(contentP1);
contentP1.textContent = "Hey I'm red!";
contentP1.style.color = "red";

const contentH3 = document.createElement("h3");
container.appendChild(contentH3);
contentH3.textContent = "I'm a blue h3!";
contentH3.style.color = "blue";

const contentDIV = document.createElement("div");
container.appendChild(contentDIV);
const contentH1 = document.createElement("h1");
const contentP2 = document.createElement("p");
contentDIV.appendChild(contentH1);
contentDIV.appendChild(contentP2);
contentH1.textContent = "I'm in a div";
contentP2.textContent = "ME TOO!";
