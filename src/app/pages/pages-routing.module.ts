import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
  {
    path: 'ionic',
    loadChildren: () => import('./ionic/ionic.module').then( m => m.IonicPageModule)
  },  {
    path: 'demo01',
    loadChildren: () => import('./demo01/demo01.module').then( m => m.Demo01PageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
