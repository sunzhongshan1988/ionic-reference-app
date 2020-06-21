import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickersPage } from './pickers.page';

const routes: Routes = [
  {
    path: '',
    component: PickersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickersPageRoutingModule {}
