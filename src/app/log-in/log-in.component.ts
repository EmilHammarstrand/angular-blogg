import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  message;
  hidden;
  constructor(private LoginService: LoginServiceService ) { }

  ngOnInit(): void {    
    this.LoginService.getValue().subscribe((value)=> {
      this.hidden = value;
      if(this.hidden == true){
        this.message = 'Du är nu inloggad, funktionalitet upplåst';
      }
      else{
        this.message = 'Du är nu utloggad, är du bloggareN?';
      }
    });

  }
  logIn(): void{
    this.LoginService.setValue(true);
  }
  logOut():void{
    this.LoginService.setValue(false);
  }
}
