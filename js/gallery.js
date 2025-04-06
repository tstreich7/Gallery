function upDate(previewPic) {
  console.log("Mouse or focus in:", previewPic.alt);
  const image = document.getElementById("image");
  image.style.backgroundImage = `url('${previewPic.src}')`;
  image.innerText = previewPic.alt;
}

function unDo() {
  console.log("Mouse or focus out");
  const image = document.getElementById("image");
  image.style.backgroundImage = "url('')";
  image.innerText = "Hover over an image below to display here.";
}

function init() {
  console.log("Seite geladen - init läuft");

  // Alle .preview-Bilder finden
  const images = document.querySelectorAll(".preview");

  for (let i = 0; i < images.length; i++) {
    // Mausereignisse
    images[i].addEventListener("mouseover", function () {
      upDate(this);
    });
    images[i].addEventListener("mouseleave", function () {
      unDo();
    });

    // Fokus-Ereignisse für Tastatur-Navigation
    images[i].addEventListener("focus", function () {
      upDate(this);
    });
    images[i].addEventListener("blur", function () {
      unDo();
    });

    // tabindex setzen für Tastaturzugriff
    images[i].setAttribute("tabindex", "0");
  }
}
