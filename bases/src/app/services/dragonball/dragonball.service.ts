import { Injectable, signal, WritableSignal } from '@angular/core';
import { type Character } from '@app/models/dragonball';

@Injectable({
  providedIn: 'root',
})
export class DragonBallService {
  characters: WritableSignal<Character[]> = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
  ]);

  addCharacter(character: Character): void {
    this.characters.update((characters) => [
      ...characters,
      {
        id:
          characters.length > 0 ? characters[characters.length - 1].id + 1 : 1,
        name: character.name,
        power: character.power,
      },
    ]);
  }
}
