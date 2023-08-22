import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  public url : any;
  public url1 : any = "https://jsonplaceholder.typicode.com/posts";
  public url2 : any = "https://jsonplaceholder.typicode.com/posts/1/comments";
  public url3 : any = "https://jsonplaceholder.typicode.com/albums";
   
}
