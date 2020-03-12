import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailed-article',
  templateUrl: './detailed-article.component.html',
  styleUrls: ['./detailed-article.component.css']
})
export class DetailedArticleComponent implements OnInit {
  latestArticle = this.DataService.getLatestArticle();

  constructor(public DataService: DataServiceService) { }

  ngOnInit(): void {
  }
  addArticle(title,content,author,estimatedTime){
    this.DataService.addArticle(title,content,author,estimatedTime);
    this.latestArticle = this.DataService.getLatestArticle();
  }
  
  deleteArticle(){
    this.DataService.removeArticle();
    this.latestArticle = this.DataService.getLatestArticle();
  }
}
