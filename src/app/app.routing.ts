import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
