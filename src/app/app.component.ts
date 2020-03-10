import { Component } from '@angular/core';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isEnabled:boolean;
  title: any;
  constructor(private LoginService: LoginServiceService ) { }
  ngOnInit(){
    this.LoginService.getValue().subscribe((value)=> {
      this.isEnabled = value;
    });
  }
  
}
