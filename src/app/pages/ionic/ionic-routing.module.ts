import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicPage } from './ionic.page';

const routes: Routes = [
  {
    path: '',
    component: IonicPage
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },  {
    path: 'alert',
    loadChildren: () => import('./alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./checkbox/checkbox.module').then( m => m.CheckboxPageModule)
  },
  {
    path: 'chip',
    loadChildren: () => import('./chip/chip.module').then( m => m.ChipPageModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./content/content.module').then( m => m.ContentPageModule)
  },
  {
    path: 'pickers',
    loadChildren: () => import('./pickers/pickers.module').then( m => m.PickersPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicPageRoutingModule {}
