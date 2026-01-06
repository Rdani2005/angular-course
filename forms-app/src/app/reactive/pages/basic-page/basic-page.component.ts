import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { FormUtils } from '@forms-app/utils';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
  styles: ``,
})
export class BasicPageComponent {
  private fb = inject(FormBuilder);

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  formUtils = FormUtils;

  onSave() {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);

    this.myForm.reset({
      price: 0,
      inStorage: 0,
    });
  }
}
