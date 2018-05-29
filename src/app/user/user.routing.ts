import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './userHome/userHome.component';
import { UserTutorsComponent } from './userTutors/userTutors.component';
import { UserComponent } from './user.component';

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
        path: 'tutors',
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
