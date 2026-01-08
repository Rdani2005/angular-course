import { Component, signal } from '@angular/core';

function log(...messages: string[]) {
  console.log(`${messages[0]} %c${messages.slice(1).join(', ')}`, 'color: #bada55');

}

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent {

  traditionalProperty = "Danny";
  signalProperty = signal("Danny");

  constructor() {
    log("Constructor siendo llamado.");
  }

  ngOnInit() {
    log("ngOnInit", "Runs one after Angular has initialized all component's inputs.");
  }

  ngOnChanges() {
    log("ngOnChanges", "Runs every time the component's input has changed.");
  }

  ngDoCheck() {
    log("ngDoCheck", "Runs every time this component is checked for changes.");
  }

  ngAfterContentInit() {
    log("ngAfterContentInit", "Runs once after the component's content has been initialized.");
  }

  ngOnDestroy() {
    log("ngOnDestroy", "Runs once before the component is destroyed");
  }
}
