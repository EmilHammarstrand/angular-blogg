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
    });
  }
  logIn(): void{
    this.LoginService.setValue(true);
    this.message = 'Du är nu inloggad, funktionalitet upplåst';
  }
  logOut():void{
    this.LoginService.setValue(false);
    this.message = 'Du är nu utloggad, är du bloggareN?';
  }
}
