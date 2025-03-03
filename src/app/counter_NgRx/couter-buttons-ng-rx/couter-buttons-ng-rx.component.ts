import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../Actions/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-couter-buttons-ng-rx',
  templateUrl: './couter-buttons-ng-rx.component.html',
  styleUrl: './couter-buttons-ng-rx.component.scss'
})
export class CouterButtonsNgRxComponent {

  constructor(private store: Store<{ counter: CounterState }>) { }
  onIncrement() {
    this.store.dispatch(increment())
  }
  OnDecrement() {
    this.store.dispatch(decrement())
  }
  onReset() {
    this.store.dispatch(reset())
  }
}
