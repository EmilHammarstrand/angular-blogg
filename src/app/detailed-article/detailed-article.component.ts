import { LoginServiceService } from './../login-service.service';
import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailed-article',
  templateUrl: './detailed-article.component.html',
  styleUrls: ['./detailed-article.component.css']
})
export class DetailedArticleComponent implements OnInit {
  latestArticle;
  disabled;

  constructor(public DataService: DataServiceService, public LoginService: LoginServiceService) { }

  ngOnInit(): void {
    this.latestArticle = this.DataService.getLatestArticle();
        this.LoginService.getValue().subscribe((value)=> {
      this.disabled = value;
    });
  }
  addArticle(title,content,author,estimatedTime){
    this.DataService.addArticle(title,content,author,estimatedTime);
    this.latestArticle = this.DataService.getLatestArticle();
  }
  removeArticle(index){
    this.DataService.removeThisArticle(index);
    this.latestArticle = this.DataService.getLatestArticle();
  }
}

