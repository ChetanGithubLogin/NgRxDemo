import { Component } from '@angular/core';

@Component({
  selector: 'app-couter',
  templateUrl: './couter.component.html',
  styleUrl: './couter.component.scss'
})
export class CouterComponent {
  counter: number = 0;
  constructor() { }
  ngOnInit() { }
  onIncrement() {
    this.counter++;
  }
  OnDecrement() {
    this.counter--;
  }
  onReset() {
    this.counter = 0;
  }
}
