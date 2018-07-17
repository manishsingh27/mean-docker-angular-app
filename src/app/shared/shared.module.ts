import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { FakeBackedInterceptor } from './fake-backed-interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './error-interceptor';
import { JwtInterceptor } from './jwt-interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RankComponent } from './rank.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NotificationComponent,
    RankComponent
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NotificationComponent,
    RankComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackedInterceptor, multi: true },  // provider used to create fake backend

  ]
})
export class SharedModule { }
