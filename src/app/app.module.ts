import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CouterComponent } from './counter/couter/couter.component';
import { CouterOutputComponent } from './counter/couter-output/couter-output.component';
import { CouterButtonsComponent } from './counter/couter-buttons/couter-buttons.component';
import { CouterNgRxComponent } from './counter_NgRx/couter-ng-rx/couter-ng-rx.component';
import { CouterButtonsNgRxComponent } from './counter_NgRx/couter-buttons-ng-rx/couter-buttons-ng-rx.component';
import { CouterOutputNgRxComponent } from './counter_NgRx/couter-output-ng-rx/couter-output-ng-rx.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter_NgRx/reducer/counter.reducer';
import { CounterInputComponent } from './counter_NgRx/counter-input/counter-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CouterComponent,
    CouterOutputComponent,
    CouterButtonsComponent,
    CouterNgRxComponent,
    CouterButtonsNgRxComponent,
    CouterOutputNgRxComponent,
    CounterInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ counter: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
