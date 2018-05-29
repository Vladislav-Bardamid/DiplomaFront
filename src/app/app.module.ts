import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutes } from './app.routing';
import { UserModule } from './user/user.module';
import { AdminComponent } from './admin/admin.component';
import { HttpService } from './services/http.Service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,
    AppRoutes
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
