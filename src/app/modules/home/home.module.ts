import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form'

const routes: Routes = [
  { path: '', component: IndexComponent },
];

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    NzInputModule,
    NzFormModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
