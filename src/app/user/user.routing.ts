import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './userHome/userHome.component';
import { UserTutorsComponent } from './userTutors/userTutors.component';
import { UserComponent } from './user.component';
import { UserSubjectsComponent } from './userSubjects/userSubjects.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: UserHomeComponent
      },
      {
        path: 'subjects/:subject',
        component: UserSubjectsComponent
      },
      {
        path: 'tutors/:tutor',
        component: UserTutorsComponent
      },
      {
        path: 'users',
        component: UserTutorsComponent
      }
    ]
  }
];

export const UserRoutes = RouterModule.forChild(routes);
