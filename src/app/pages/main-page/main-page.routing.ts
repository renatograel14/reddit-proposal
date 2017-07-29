import { HotPostsComponent } from './categories/hot-posts/';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './';

const routes: Routes = [
  {
    path: '', component: MainPageComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'hot-posts' },
      { path: 'hot-posts', component: HotPostsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }

export const routedComponents = [
  MainPageComponent,
  HotPostsComponent
];