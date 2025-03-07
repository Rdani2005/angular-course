import { Component, output, signal, WritableSignal } from '@angular/core';
import { Character } from '@app/models/dragonball';

@Component({
  selector: 'dragonball-add-character',
  imports: [],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  name: WritableSignal<string> = signal<string>('');
  power: WritableSignal<number> = signal<number>(0);
  newCharacter = output<Character>();

  addCharacter(): void {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      name: this.name(),
      power: this.power(),
      id: Math.floor(Math.random() * 1000),
    };
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
