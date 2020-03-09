import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  message = 'Är det säkert att det är du som är bloggaren?'
  hidden = true;
  constructor(private LoginService: LoginServiceService ) { }

  ngOnInit(): void {
  }
  logIn(): void{
    this.LoginService.setValue(true);
    this.message = 'Du är nu inloggad, funktionalitet upplåst';
    this.hidden = false;
  }
  logOut():void{
    this.LoginService.setValue(false);
    this.message = 'Du är nu utloggad';
    this.hidden = true;
  }
}
