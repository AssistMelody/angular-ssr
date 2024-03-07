import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubpageComponent } from './components/subpage/subpage.component';

const routes: Routes = [{
  path: 'son',
  component: SubpageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
