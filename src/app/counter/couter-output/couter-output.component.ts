import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-couter-output',
  templateUrl: './couter-output.component.html',
  styleUrl: './couter-output.component.scss'
})
export class CouterOutputComponent {
  @Input() counter!: number;
}
