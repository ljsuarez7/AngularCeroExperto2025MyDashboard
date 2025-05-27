import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [CommonModule],
  template: `<section [ngClass]="['w-full h-[600px]', cssClass]">HeavyLoadersSlowComponent</section>`,
})
export class HeavyLoadersSlowComponent {

  // cssClass = input.required<string>(); //Esto da un error, ver como arreglarlo

  @Input({required: true}) cssClass!: string;

  constructor() {

    const start = Date.now();

    while(Date.now() - start < 3000){};

    console.log('HeavyLoadersSlowComponent cargado');


  }

}
