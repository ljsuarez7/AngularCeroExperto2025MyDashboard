import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  changeDetection: ChangeDetectionStrategy.OnPush, //Revisar que hace esto porque no lo tengo claro del todo
  imports: [TitleComponent, JsonPipe],
  templateUrl: './change-detection.component.html',
})
export default class ChangeDetectionComponent {

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  };

  public currentFramework = computed(
    () => `Change Detection - ${this.frameworkAsSignal().name}`
  );

  constructor() {

    setTimeout(() => {

      // this.frameworkAsProperty.name = 'React';

      //Esta es una forma de actualizar la señal
      // this.frameworkAsSignal.update(value => ({
      //   ...value,
      //   name: 'React'
      // }));

      //Esta es otra forma de actualizar la señal
      this.frameworkAsSignal.update(value => {
        value.name = 'React';
        return {...value};
      });

      console.log('Hecho');

    }, 3000);

  }

}
