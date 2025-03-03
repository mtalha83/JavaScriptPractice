// let text = document.getElementById("text");
// // console.log(text);
// text.style.color = "green";
// text.style.backgroundColor = "lightgray";
// text.style.fontSize = "18px";


// let oldTextContent = document.getElementById("paragraph");
// oldTextContent.textContent = "New Paragraph";
// // let againTextContetnt = document.querySelector("p");
// // againTextContetnt.textContent = "again new pragrapg";


// let oldInnerText = document.querySelector("h1");
// oldInnerText.innerText = "New Heading Text";

// let oldInnerHtml = document.querySelector("div");
// oldInnerHtml.innerHTML = "This is <strong>bold</strong> content";


// let newP = document.createElement("p");
// let addText = document.createTextNode("Hello, Students!");
// // let newP = document.getElementById("newp");
// // newP.style.color = "green";
// // newP.style.fontSize = "20px";
// // let ContentSection = document.getElementById("content-section");
// // document.body.ContentSection.appendChild(newP);




let textColor = document.getElementById("text");
textColor.style.color = "green";
textColor.style.backgroundColor = "lightgray";
textColor.style.fontSize = "18px";

let newParagraph = document.getElementById("paragraph");
newParagraph.textContent = "new paragraph text";
let newHeading = document.getElementById("heading");
newHeading.innerText = "new heading text";

let newDiv = document.getElementById("content");
newDiv.innerHTML = "this is <strong>bold</strong> content";

let contSection = document.getElementById("content-section");
let newPara = document.createElement("p");
let newParaText = document.createTextNode("Hello, Students!");
newPara.appendChild(newParaText);
newPara.style.color = "green";
newPara.style.fontSize = "20px";
// newPara.style.cssText = "color: green ; fontSize: 20px;";
contSection.appendChild(newPara);