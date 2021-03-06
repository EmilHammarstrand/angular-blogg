import { LoginServiceService } from './../login-service.service';
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';


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
  estimatedTime: number;
  successfullyPublished: boolean;
  showForm: boolean = true;
  constructor(public LoginService: LoginServiceService, public DataService: DataServiceService) { }

  

  publishArticleBtn(){
    this.DataService.addArticle(this.titlee, this.content, this.author, this.estimatedTime);
    this.successfullyPublished = true;
    this.showForm = false;
  }
  ngOnInit(){
    this.LoginService.getValue().subscribe((value)=> {
      this.loginStatus = value;
    });
  }

}
