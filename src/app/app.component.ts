import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ServerName = 'Apollo';
  ServerPID = 11;
  ServerStatus = 'Offline';
  StatusFlag = false;
  buttonState = true;

  constructor(){
    setTimeout(() => {
      this.buttonState = false;
    }, 2500);
  }

  toggleServerStatus(){
    this.StatusFlag = !this.StatusFlag;
    if(this.StatusFlag === true){
      this.ServerStatus = 'Online';
    }
    else{
      this.ServerStatus = 'Offline';
    }
    return this.ServerStatus;
  }
}
