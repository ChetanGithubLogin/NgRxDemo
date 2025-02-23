import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-couter-buttons',
  templateUrl: './couter-buttons.component.html',
  styleUrl: './couter-buttons.component.scss'
})
export class CouterButtonsComponent {

  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();
  @Output() reset = new EventEmitter();
  onIncrement() {
    this.increment.emit();
  }
  OnDecrement() {
    this.decrement.emit();
  }
  onReset() {
    this.reset.emit();
  }
}
