import { array, safeParse } from 'valibot';
import { effect, Injectable, signal, WritableSignal } from '@angular/core';
import { Character } from '@app/models/dragonball';

const DRAGONBALL_CHARACTERS_KEY = 'dragon-characters';

function loadFromLocalStorage(): Character[] {
  const characterJson = localStorage.getItem(DRAGONBALL_CHARACTERS_KEY);
  if (!characterJson) return [];
  const parsedObj = JSON.parse(characterJson);
  const parsedCharacters = safeParse(array(Character), parsedObj);
  return parsedCharacters.success ? parsedCharacters.output : [];
}

@Injectable({
  providedIn: 'root',
})
export class DragonBallService {
  characters: WritableSignal<Character[]> = signal<Character[]>(
    loadFromLocalStorage(),
  );

  saveToLocalStorage = effect(() => {
    localStorage.setItem(
      DRAGONBALL_CHARACTERS_KEY,
      JSON.stringify(this.characters()),
    );
  });

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
