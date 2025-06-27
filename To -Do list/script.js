const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li); //this will add the text from li in the list container and append it to the list
    let span = document.createElement("span"); //creating a span element for every time an li element is created with the below contents
    span.innerHTML = "\u00d7"; //made the cross icon for task deletion
    li.appendChild(span);
    saveData();
  }
  inputBox.value = "";
}

listContainer.addEventListener("click",function (e) {
  
    if(e.target.tagName === "LI") {    //will check is List container id clicked or not
      e.target.classList.toggle("checked"); //if checked classname id alreadry therethen it will toogle the checked image on and off
      saveData();
    } else if(e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML); //this will save the data in the local storage if opened the browser agian it will show the data

}
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");  //this iwll show all th dtata insite the elemnt data
}
showTask(); 