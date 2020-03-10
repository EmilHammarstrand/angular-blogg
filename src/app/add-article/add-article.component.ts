import { LoginServiceService } from './../login-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  loginStatus:boolean;
  buttonPressValue: string;
  titlee: string;
  author: string;
  content: string;

  constructor(public LoginService: LoginServiceService ) { }

  publishArticleBtn(){
    this.buttonPressValue = this.titlee + this.author + this.content;
  }

  ngOnInit(){
    this.LoginService.getValue().subscribe((value)=> {
      this.loginStatus = value;
    });
  }

}
