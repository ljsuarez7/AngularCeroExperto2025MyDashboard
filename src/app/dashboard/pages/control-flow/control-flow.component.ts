import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.component.html',
})
export default class ControlFlowComponent {

  public showContent = signal(false);

  public toggleContent() {
    this.showContent.update(value => !value);
  }

}
