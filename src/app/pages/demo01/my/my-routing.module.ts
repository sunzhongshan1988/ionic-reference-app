import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPage } from './my.page';

const routes: Routes = [
  {
    path: '',
    component: MyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPageRoutingModule {}
