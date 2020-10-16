import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobalProfitPage } from './global-profit.page';

const routes: Routes = [
  {
    path: '',
    component: GlobalProfitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlobalProfitPageRoutingModule {}
