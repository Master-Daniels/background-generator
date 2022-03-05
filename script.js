var button1 = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Done"));
	li.appendChild(button);
	button.onclick = underlineParent;
}
function addlistAfterClick() {
		 if (inputLength() > 0) {
		createListElement();
	}	
}
function addlistAfterKeypress(event) {
		if (inputLength() > 0 && event.code === "Enter") {
			createListElement();
	}
}
function underlineParent(event){
	event.target.parentNode.classList.toggle("done");
}


function removeParent(evt){
	evt.target.parentNode.remove();
} 


button1.addEventListener("click", addlistAfterClick);
input.addEventListener("keypress", addlistAfterKeypress);