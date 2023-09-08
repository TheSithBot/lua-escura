import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}

  posicaoX: number = 120; // Posição X inicial
  posicaoY: number = 107; // Posição Y inicial
  numCliques: number = 0;
  toastyVisivel: boolean = false;
  posicaoYToasty: number = 0;
  animationState = 'hidden';
  @ViewChild('minhaImagem') minhaImagem: ElementRef;
  distancia = -120;
  abc = true;

  moverBotao() {
    const min = 0;
    const max = 250;

    const novaPosicaoX = Math.floor(Math.random() * (max - min + 1)) + min;
    const novaPosicaoY = Math.floor(Math.random() * (470 - min + 1)) + min;
    // const novaPosicaoY = Math.floor(Math.random() * window.innerHeight);

    this.posicaoX = novaPosicaoX;
    this.posicaoY = novaPosicaoY;

    this.numCliques++;

    if (this.numCliques === 3) {
      this.mostrarToasty();
    }
  }

  abcc(): void {
    this.abc = false;
  }

  mostrarToasty() {
    const intervalo = setInterval(() => {
      this.distancia += 1; // Alterado para aumentar a distância
      this.minhaImagem.nativeElement.style.bottom = `${this.distancia}px`;
      console.log(this.distancia);

      // Quando a imagem atingir a altura máxima, pare a animação
      if (this.distancia === 0) {
        clearInterval(intervalo);
      }
    }, 10); // Ajuste o intervalo para ajustar a velocidade da animação
  }
}
