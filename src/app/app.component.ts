import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'home';
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
}
