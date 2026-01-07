import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '@forms-app/utils';

@Component({
  selector: 'app-register-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(this.formUtils.namePattern)
      ],
    ],
    email: [
      '',
      [Validators.required, Validators.pattern(this.formUtils.emailPattern)],
      [this.formUtils.checkingServerResponse],
    ],
    username: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(this.formUtils.notOnlySpacesPattern),
        this.formUtils.notStrider
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  }, {
      validators: [
        this.formUtils.isFieldOneEqualFieldTwo('password', 'confirmPassword')
      ]
    });

  onSubmit() {
    this.myForm.markAllAsTouched();
  }


}
