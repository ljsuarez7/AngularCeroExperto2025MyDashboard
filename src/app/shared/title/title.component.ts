import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
})
export class TitleComponent {

  title = input.required<string>();
  //Con esto si tenemos este input en el llamada a este componente seria true y si no false
  withShadow = input(false, {transform: booleanAttribute});

}
