import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentRoster = ['Arya', 'Rohit', 'Imran']
  currentName = '';
  add(){
    this.studentRoster.push(this.currentName)
  }
}
