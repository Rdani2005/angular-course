import { Component, inject } from '@angular/core';
import {
  AddCharacterComponent,
  CharacterListComponent,
} from '@app/components/dragonball';
import { DragonBallService } from '@app/services/dragonball';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterListComponent, AddCharacterComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
})
export class DragonballSuperPageComponent {
  public dragonBallService = inject(DragonBallService);
}
