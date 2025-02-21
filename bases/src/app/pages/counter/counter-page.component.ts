import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent {
  counter: number = 10;

  counterSignal = signal<number>(10);

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((prev) => prev + value);
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
