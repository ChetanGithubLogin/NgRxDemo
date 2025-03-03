import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-couter-output-ng-rx',
  templateUrl: './couter-output-ng-rx.component.html',
  styleUrl: './couter-output-ng-rx.component.scss'
})
export class CouterOutputNgRxComponent {
  counter!: number;
  constructor(private store: Store<{ counter: CounterState }>) {

  }

  ngOnInit() {
    this.store.select('counter').subscribe(data => {
      this.counter = data.counter
    })
  }
}
