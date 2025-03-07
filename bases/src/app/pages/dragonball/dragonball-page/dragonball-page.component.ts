import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { DragonBallService } from '@app/services/dragonball';

@Component({
  selector: 'app-dragonball-page',
  imports: [NgClass],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
})
export class DragonballPageComponent {
  public dragonBallService = inject(DragonBallService);

  name = signal<string>('');
  power = signal<number>(0);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    this.dragonBallService.addCharacter({
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    });
    this.name.set('');
    this.power.set(0);
  }
}
