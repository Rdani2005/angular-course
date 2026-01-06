import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '@forms-app/utils';

@Component({
  selector: 'app-dynamic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dynamic-page.component.html',
  styles: ``,
})
export class DynamicPageComponent {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Mortal Kombat 1', Validators.required],
      ['Howards Legacy', Validators.required],
    ], Validators.minLength(3)),
  });

  newFavorite = this.fb.control('', {
    validators: [Validators.required]
  });

  get favoriteGames(): FormArray {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  onAddToFavorites() {
    if (this.newFavorite.invalid) return;
    const newGame = this.newFavorite.value;
    this.favoriteGames.push(this.fb.control(newGame, Validators.required));
    this.newFavorite.reset();
  }

  onDeleteFavorite(index: number) {
    this.favoriteGames.removeAt(index);
  }

  onSubmit() {
    this.myForm.markAsTouched();
  }
}
