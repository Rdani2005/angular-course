import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './basic-page.component.html',
  styles: ``,
})
export class BasicPageComponent {
  nameLower = signal('danny');
  nameUpper = signal('DANNY');
  fullName = signal('DaNny sEquEiRA');
}
