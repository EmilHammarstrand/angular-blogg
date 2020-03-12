import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {
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