import { NgClass, NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

type Character = {
  id: number;
  name: string;
  power: number;
};

@Component({
  selector: 'app-dragonball-page',
  imports: [NgClass, NgFor],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
})
export class DragonballPageComponent {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Gohan', power: 7000 },
  ]);
}
