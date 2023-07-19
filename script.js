function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //Troca da imagem do avatar
  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')){
    img.setAttribute("src", "./assets/avatar_light.jpeg")
  } else {
    img.setAttribute("src", "./assets/avatar_dark.jpeg")
  }
}