var link=document.querySelector(".write-me"),popup=document.querySelector(".pop-up-form"),close=popup.querySelector(".icon-close"),form=popup.querySelector("form"),name=popup.querySelector("[name=name]"),email=popup.querySelector("[name=email]"),text=popup.querySelector("[name=text]"),storage=localStorage.getItem("[name=name]");link.addEventListener("click",function(a){a.preventDefault();popup.classList.add("pop-up-form-show");storage?(name.value=storage,email.focus()):name.focus()});
close.addEventListener("click",function(a){a.preventDefault();popup.classList.remove("pop-up-form-show");popup.classList.remove("icon-close")});form.addEventListener("submit",function(a){name.value&&email.value&&text.value?localStorage.setItem("name",name.value):(a.preventDefault(),popup.classList.remove("pop-up-form-error"),popup.classList.add("pop-up-form-error"))});
window.addEventListener("keydown",function(a){27===a.keyCode&&popup.classList.contains("pop-up-form-show")&&(popup.classList.remove("pop-up-form-show"),popup.classList.remove("pop-up-form-error"))});