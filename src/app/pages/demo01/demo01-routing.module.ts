import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo01Page } from './demo01.page';

const routes: Routes = [
  {
    path: '',
    component: Demo01Page
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'sign',
    loadChildren: () => import('./sign/sign.module').then( m => m.SignPageModule)
  },
  {
    path: 'recharge',
    loadChildren: () => import('./recharge/recharge.module').then( m => m.RechargePageModule)
  },
  {
    path: 'global-profit',
    loadChildren: () => import('./global-profit/global-profit.module').then( m => m.GlobalProfitPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'my-team',
    loadChildren: () => import('./my-team/my-team.module').then( m => m.MyTeamPageModule)
  },
  {
    path: 'finance',
    loadChildren: () => import('./finance/finance.module').then( m => m.FinancePageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'invite',
    loadChildren: () => import('./invite/invite.module').then( m => m.InvitePageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'my',
    loadChildren: () => import('./my/my.module').then( m => m.MyPageModule)
  },
  {
    path: 'learn',
    loadChildren: () => import('./learn/learn.module').then( m => m.LearnPageModule)
  },
  {
    path: 'buy',
    loadChildren: () => import('./buy/buy.module').then( m => m.BuyPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Demo01PageRoutingModule {}
