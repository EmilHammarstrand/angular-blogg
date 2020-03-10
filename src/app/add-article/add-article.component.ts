import { LoginServiceService } from './../login-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  loginStatus:boolean;
  
  
  constructor(public LoginService: LoginServiceService ) { }
  titlee: string;
  author: string;
  content: string;
  afterButtonPressedValue: string = "";
  
  publishArticle() {
    this.titlee = this.afterButtonPressedValue;
  }


  ngOnInit(){
    this.LoginService.getValue().subscribe((value)=> {
      this.loginStatus = value;
    });
  }

}
