import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './userHome/userHome.component';
import { UserRoutes } from './user.routing';
import { UserTutorsComponent } from './userTutors/userTutors.component';
import { UserComponent } from './user.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserAuthComponent } from './userAuth/userAuth.component';
import { AvatarModule } from 'ngx-avatar';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AvatarModule,
    UserRoutes
  ],
  declarations: [
    UserComponent,
    UserHomeComponent,
    UserTutorsComponent,
    UserHomeComponent,
    UserTutorsComponent,
    UserAuthComponent
  ]
})
export class UserModule { }
