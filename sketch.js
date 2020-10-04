// variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

// variáveis da velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

// placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

// variáveis da raquete
let xRaquete = 0;
let yRaquete = 150;
let wRaquete = 10;
let hRaquete = 80;

// variáveis da raquete do oponente
let xRaqueteOponente = 590;
let yRaqueteOponente = 150;
let wRaqueteOponente = 10;
let hRaqueteOponente = 80;
let velocidadadeYRaqueteOponente = 0;

// variável de colisão
let hit = false;

// variável pro computador errar
let chanceDeErrar = 0;
let dOponenteBolinha = 0;

function setup() {

  createCanvas(600, 400);
}

function draw() {

  background(174, 214, 241);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  criaRaquete(xRaquete, yRaquete);
  criaRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPontos();
}

function mostraBolinha() {

  fill(26, 82, 118);
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {

  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {

  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }

  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function criaRaquete(x, y) {

  fill(118, 68, 138);
  rect(x, y, wRaquete, hRaquete);
}

function movimentaMinhaRaquete() {

  if (keyIsDown(UP_ARROW)) {
    if (yRaquete > 0) {
      yRaquete -= 5;
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (yRaquete < height - hRaquete) {
      yRaquete += 5;
    }
  }
}

function verificaColisaoRaquete(x, y){
  
  hit = collideRectCircle(x, y, wRaquete, hRaquete, xBolinha, yBolinha, diametro);
  if(hit){
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOponente() {

  velocidadadeYRaqueteOponente = yBolinha - yRaqueteOponente - wRaquete / 2 - dOponenteBolinha;
  yRaqueteOponente += velocidadadeYRaqueteOponente;
  
    if (pontosOponente > meusPontos){
    dOponenteBolinha = 85;
  }
  if (pontosOponente < meusPontos && dOponenteBolinha > 50){
    dOponenteBolinha -= 3;
  }
}

function incluiPlacar() {
  
  stroke(0);
  
  textAlign(CENTER);
  textSize(16);
  
  fill(40, 116, 166);
  
  rect(150, 10, 40, 20);
  rect(450, 10, 40, 20);
  
  fill(225);
  text(meusPontos, 170, 26);
  text(pontosOponente, 470, 26);
}

function marcaPontos() {
  
  if (xBolinha <= 9) {
    pontosOponente += 1;
  }
  if (xBolinha >= 592) {
    meusPontos += 1;
  }
}