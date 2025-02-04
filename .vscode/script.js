function toggleMode(){
  const html = document.documentElement

  //if (html.classList.contains('light')){
  //   html.classList.remove('light')
  // }
  // else{
  // html.classList.add("light")

  html.classList.toggle("light")

  //substituir a img

  const img = document.querySelector("#profile img") //query e pesquisa pelo seletor, ou seja, seletor #profile img
  //pegar a tag img
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png") // muda o atributo sa variavel (img nesse caso)
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
