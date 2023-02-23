import { Component } from '@angular/core';
import { lorem, random } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';

  onInput(eventTarget: EventTarget) {
    const value: string = (eventTarget as HTMLInputElement).value;
    this.enteredText = value;
    console.log(value);
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect'
  }
}
