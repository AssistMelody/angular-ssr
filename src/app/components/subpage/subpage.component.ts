import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { isPlatformBrowser, isPlatformServer } from '@angular/common'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.component.html',
  styleUrls: ['./subpage.component.less']
})
export class SubpageComponent {
  title = "sonPage"
  data:any[] = []
  constructor(public meta:Meta,@Inject(PLATFORM_ID) private platformId: Object, public http: HttpClient){
    this.meta.removeTag('name=description')
    this.meta.removeTag('name=keyword')
    this.meta.addTags([{
      content: 'son page description',
      name: 'description'
    },{
      content: 'son page title',
      name: 'keyword'
    }])
    if (isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem('test','11111')
    }
    console.log('浏览器环境：',isPlatformBrowser(this.platformId));
    console.log('服务的环境',isPlatformServer(this.platformId));
    this.getData()
  }

  getData(){
    this.http.get('http://127.0.0.1:4523/m1/1817821-0-default/page/list').subscribe(res=>{
      this.data = (res as any).data
    })
  }
}
