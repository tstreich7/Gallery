function upDate(previewPic){
  console.log("upDate Funktion aufgerufen");
  console.log("previewPic:", previewPic);
  console.log("Alt-Text des Bildes:", previewPic.alt);
  console.log("Quell-URL des Bildes:", previewPic.src);

  document.getElementById("image").innerHTML = previewPic.alt;
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo(){
  document.getElementById("image").style.backgroundImage = "url('')";
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
