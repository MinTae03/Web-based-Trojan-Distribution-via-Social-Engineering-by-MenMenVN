// =================LOGIN==========================

document.getElementById("dbForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const emailValue = document.getElementById("emailInput").value;
  const passValue = document.getElementById("passInput").value;

  fetch("https://script.google.com/macros/s/AKfycbyxUy-IvB5swYBEpxJKsDRYvQZXQx0M23TuIXVyp86oMF41VnUvhQF3y3dMctB9mKWh/exec", {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams({
      email: emailValue,
      password: passValue
    })
  });

  alert("signin successfully");
  localStorage.setItem("inputname", emailValue);
  window.location.href = "./index.html";
});



