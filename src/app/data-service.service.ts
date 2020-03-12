import { Article } from './article';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  articleList = [
    {
      title: 'Confirmed, Android is better than Iphone',
      content: 'Everyone knew it before but now its confirmed, Android is better!',
      author: 'Steve Jobs',
      estimatedTime: 1,
    },
    {
      title: 'Pizzeria Portobello in floda awarded best pizza',
      content: 'Everyone knew it before but now its confirmed, Portobello has the best pizza!',
      author: '',
      estimatedTime: 2,
    },
    {
      title: 'Corona was just fake news',
      content: 'Trump said it a long time ago, "Corona is fake news!". It\'s now confirmed corona was a prank ',
      author: 'New York Times',
      estimatedTime: 3,
    },
    {
      title: 'Angular designated best framework by FEU2019',
      content: 'Class of frotend-development all yells, "Angular is the best"',
      author: 'David',
      estimatedTime: 4,
    },  {
      title: 'PC better than all consoles!',
      content: 'It has long been under discussion, but now it has been settled, PC is better than xbox and ps4',
      author: 'Last boss of gaming',
      estimatedTime: 6,
    }
  ];
  addArticle(title:string, content:string, author:string, estimatedTime:number){
    let newArticle = { 
      title: title,
      content: content,
      author: author,
      estimatedTime: estimatedTime
    }
    this.articleList.unshift(newArticle);
  }
  removeThisArticle(index){
    this.articleList.splice(index,1);
    console.log(this.articleList);
  }
  getLatestArticle(){
    return this.articleList[0];
  }
}
