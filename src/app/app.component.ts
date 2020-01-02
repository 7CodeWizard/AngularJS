import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag = true;

  ToogleFlag(){
    this.flag = !this.flag
    return this.flag;
  }

  getColor(){
    if(this.flag === true){
      return 'green';
    }
    else{
      return 'red';
    }
  }
}
