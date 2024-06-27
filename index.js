validBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (weight.value === "" || size.value === "") {
    alert("Veuillez entrez votre taille ou votre poids correctement");
    imcValue.textContent = "";
  } else {
    imcValue.textContent = (
      (weight.value / Math.pow(size.value, 2)) *
      10000
    ).toFixed(1);
    pHidden.style.opacity = 1;
  }
});
