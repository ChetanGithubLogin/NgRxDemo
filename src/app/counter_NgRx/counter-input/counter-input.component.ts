import { Component } from '@angular/core';
import { CounterState } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { customIncrement } from '../Actions/counter.actions';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrl: './counter-input.component.scss'
})
export class CounterInputComponent {
  value!: number;
  constructor(private store: Store<{ counter: CounterState }>) {

  }

  onAdd() {
    console.log(this.value)
    this.store.dispatch(customIncrement({ count: this.value }))
  }
}
