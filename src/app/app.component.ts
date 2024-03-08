import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'home';
  env = environment
  constructor(public meta:Meta){
    this.meta.removeTag('name=description')
    this.meta.removeTag('name=keyword')
    this.meta.addTags([{
      content: 'This is a description',
      name: 'description'
    },{
      content: 'This is a home title',
      name: 'keyword'
    }])
  }
  ngOnInit(): void {
    console.log("render 1 次");
  }

  show(){
    console.log("environment",environment);
  }

}
