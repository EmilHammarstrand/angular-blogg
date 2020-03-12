import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-latest-article',
  templateUrl: './latest-article.component.html',
  styleUrls: ['./latest-article.component.css']
})
export class LatestArticleComponent implements OnInit {
  disabled:boolean;
  constructor(public DataService: DataServiceService, public LoginService: LoginServiceService) { }

  ngOnInit(): void {
    this.LoginService.getValue().subscribe((value)=> {
      this.disabled = value;
    });
  }
  removeArticle(index){
    this.DataService.removeThisArticle(index);
  }

}
