/variáveis da bolinha

let xBolinha = 300;
let yBolinha = 200;
let diametro = 25; diametro
let raio = diametro/2

//variaveis da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete();
    movimentaMinhaRaquete();
    movimentaMouse();
    verificaColisaoMinhaRaquete();
}
function mostraBolinha() {
  fill('#91E63');
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha > width || xBolinha < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha > height || yBolinha < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete() {
  fill('green')
    rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
function movimentaMouse(){
  if(mouseIsPressed){
    yRaquete=mouseY;
  }
}

function verificaColisaoMinhaRaquete() {
    colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, diametro/2);
    if (colidiu){
        velocidadeXBolinha *= -1;
  }
}
  