import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubpageComponent } from './components/subpage/subpage.component';
import {provideClientHydration} from '@angular/platform-browser';
import { NgxSsrCacheModule } from '@ngx-ssr/cache';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SubpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // NgxSsrCacheModule.configLruCache({ maxAge: 10 * 60_000, maxSize: 50 })
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
