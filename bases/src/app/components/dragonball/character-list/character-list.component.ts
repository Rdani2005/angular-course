import { Component, input, InputSignal } from '@angular/core';
import { Character } from '../../../models/dragonball';
import { NgClass } from '@angular/common';

@Component({
  selector: 'dragon-ball-character-list',
  imports: [NgClass],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
})
export class CharacterListComponent {
  characters: InputSignal<Character[]> = input.required<Character[]>();
  listName: InputSignal<string> = input.required<string>();
}
