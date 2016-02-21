var link = document.querySelector(".write-me"); 

var popup = document.querySelector(".pop-up-form"); 
var close = popup.querySelector(".icon-close"); 

var form = popup.querySelector("form"); 
var name = popup.querySelector("[name=name]"); 
var email = popup.querySelector("[name=email]"); 
var text = popup.querySelector("[name=text]"); 

var storage = localStorage.getItem("[name=name]"); 

link.addEventListener("click", function(event) { 
	event.preventDefault(); 
	popup.classList.add("pop-up-form-show"); 

	if (storage) { 
	name.value = storage; 
	email.focus(); 
	} else { 
	name.focus(); 
	} 

}); 

close.addEventListener("click", function(event) { 
	event.preventDefault(); 
	popup.classList.remove("pop-up-form-show"); 
	popup.classList.remove("icon-close"); 
}); 

form.addEventListener("submit", function(event) { 
if (!name.value || !email.value || !text.value) { 
	event.preventDefault(); 
	popup.classList.remove("pop-up-form-error"); 
	popup.classList.add("pop-up-form-error"); 
	} else { 
	localStorage.setItem("name", name.value); 
	} 
}); 

window.addEventListener("keydown", function(event) { 
	if (event.keyCode === 27) { 
	if (popup.classList.contains("pop-up-form-show")) { 
	popup.classList.remove("pop-up-form-show"); 
	popup.classList.remove("pop-up-form-error"); 
	} 
	} 
}); 