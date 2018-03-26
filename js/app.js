var Calculadora = {

  tecla: document.getElementsByClassName('tecla'),
  display : document.getElementById('display'),
  num1 : 0,
  oper: "",
  resp: "",

  pulsa: function (tecla)
  {
    tecla.style.padding = '2px';
    setTimeout(function () {tecla.style.padding = '0px';}, 50);

    if (!isNaN(tecla.alt) && display.textContent.replace("-","").replace(".","").length < 8) {
      if (display.textContent.length == 1 && display.textContent == "0")
        display.textContent = tecla.alt;
      else
        display.textContent += tecla.alt;
    }
    else if (tecla.alt == "punto" && display.textContent.length < 8 && display.textContent.indexOf(".") == -1) display.textContent += "."
    else if (tecla.alt == "On") display.textContent = "0";
    else if (tecla.alt == "signo" && display.textContent != "0") {
        if (display.textContent.indexOf("-") == -1) display.textContent = "-" + display.textContent;
        else display.textContent = display.textContent.replace("-","")
    }
    else if (tecla.alt == "por" || tecla.alt == "dividido" || tecla.alt == "mas" || tecla.alt == "menos") {
      num1 = display.textContent;
      oper = tecla.alt;
      display.textContent = "0";
    }
    else if (tecla.alt == "igual") {
      switch (oper)
      {
        case "mas":
          resp = Number(num1) + Number(display.textContent);
          break;
        case "menos":
          resp = Number(num1) - Number(display.textContent);
          break;
        case "por":
          resp = num1 * display.textContent;
          break;
        case "dividido":
          resp = num1 / display.textContent;
          break;
        default:
          break;
      }
      display.textContent = resp.toString().substring(0, 8);
    }
  },

  inicializar: function () {
    this.tecla[0].onclick = function(){ Calculadora.pulsa(Calculadora.tecla[0])}//ON/C
    this.tecla[1].onclick = function(){ Calculadora.pulsa(Calculadora.tecla[1])}//+/-
    this.tecla[2].onclick = function(){ Calculadora.pulsa(Calculadora.tecla[2])}//raiz
    this.tecla[3].onclick = function(){ Calculadora.pulsa(Calculadora.tecla[3])}//div
    this.tecla[4].onclick = function(){ Calculadora.pulsa(Calculadora.tecla[4])}//7
    this.tecla[5].onclick = function(){ Calculadora.pulsa(Calculadora.tecla[5])}//8
    this.tecla[6].onclick = function(){ Calculadora.pulsa(Calculadora.tecla[6])}//9
    this.tecla[7].onclick = function(){ Calculadora.pulsa(Calculadora.tecla[7])}//x
    this.tecla[8].onclick = function(){ Calculadora.pulsa(Calculadora.tecla[8])}//4
    this.tecla[9].onclick = function(){ Calculadora.pulsa(Calculadora.tecla[9])}//5
    this.tecla[10].onclick = function(){ Calculadora.pulsa(Calculadora.tecla[10])}//6
    this.tecla[11].onclick = function(){ Calculadora.pulsa(Calculadora.tecla[11])}//resta
    this.tecla[12].onclick = function(){ Calculadora.pulsa(Calculadora.tecla[12])}//1
    this.tecla[13].onclick = function(){ Calculadora.pulsa(Calculadora.tecla[13])}//2
    this.tecla[14].onclick = function(){ Calculadora.pulsa(Calculadora.tecla[14])}//3
    this.tecla[15].onclick = function(){ Calculadora.pulsa(Calculadora.tecla[15])}//0
    this.tecla[16].onclick = function(){ Calculadora.pulsa(Calculadora.tecla[16])}//.
    this.tecla[17].onclick = function(){ Calculadora.pulsa(Calculadora.tecla[17])}//=
    this.tecla[18].onclick = function(){ Calculadora.pulsa(Calculadora.tecla[18])}//suma
  }
};

Calculadora.inicializar();
