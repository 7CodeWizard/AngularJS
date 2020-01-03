import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  state = true;
  counter = [];

  buttonToggle(){
    this.state = !this.state;
    this.counter.push(this.counter.length + 1)
  }

  getLength(){
    if(this.counter.length>4){
      return 'blue';
    }else{
      return 'red';
    }
  }
}
