import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-couter-output-ng-rx',
  templateUrl: './couter-output-ng-rx.component.html',
  styleUrl: './couter-output-ng-rx.component.scss'
})
export class CouterOutputNgRxComponent {
  counter!: number;
  constructor(private store: Store<{ counter: { counter: number } }>) {

  }

  ngOnInit() {
    this.store.select('counter').subscribe(data => {
      this.counter = data.counter
    })
  }
}
