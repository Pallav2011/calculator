console.log(`get element by TagName*************************`);
const h2Data = document.getElementsByTagName("h2");
console.log(h2Data[0]);
console.log(`Content: ${h2Data[0].innerHTML}`);

console.log(`get element by ID**********************`);
const getById=document.getElementById("para2");
console.log(getById);
console.log(`Content: ${getById.innerHTML}`);

console.log(`get element by class**********************`);
const getByClass=document.getElementsByClassName("name");
console.log(getByClass[0]);
console.log(getByClass[1]);
console.log(`content: ${getByClass[0].innerHTML}`);
console.log(`content: ${getByClass[1].innerHTML}`);

console.log(`get element by quarySelector**********************`);
const getByQuaryTagName=document.querySelector("h2");
console.log(getByQuaryTagName);
console.log(`Content: ${getByQuaryTagName.innerHTML}`);
const  getByQuaryId=document.querySelector("#para2");
console.log(getByQuaryId);
console.log(`Content: ${getByQuaryId.innerHTML}`);
const  getByQuaryClass=document.querySelector(".name");
console.log(getByQuaryClass);
console.log(`Content: ${getByQuaryClass.innerHTML}`);

console.log(`get element by quarySelectorAll**********************`);
const getByQuaryAllTagName=document.querySelectorAll("h2");
console.log(getByQuaryAllTagName[0]);
console.log(`Content: ${getByQuaryAllTagName[0].innerHTML}`);
const getByQuaryAllId=document.querySelectorAll("#para2");
console.log(getByQuaryAllId[0]);
console.log(`Content: ${getByQuaryAllId[0].innerHTML}`);
const getByQuaryAllClass=document.querySelectorAll(".name");
console.log(getByQuaryAllClass[0]);
console.log(`Content: ${getByQuaryAllClass[0].innerHTML}`);
console.log(getByQuaryAllClass[1]);
console.log(`Content: ${getByQuaryAllClass[1].innerHTML}`);