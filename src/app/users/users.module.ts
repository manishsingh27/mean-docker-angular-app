import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { UserDetailComponent } from './user-detail.component';
import { UserDetailGuard } from './user-detail.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
      {
        path: 'users/:id',
        canActivate: [UserDetailGuard],
        component: UserDetailComponent
      },
  ]),
  SharedModule
  ],
  declarations: [
    UserListComponent,
    UserDetailComponent
  ]
})
export class UsersModule { }
