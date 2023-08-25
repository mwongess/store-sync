import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // auth routes
  {
    path: 'login',
    loadComponent: () =>
      import('../pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('../pages/signup/signup.component').then((m) => m.SignupComponent),
  },

  //app routes
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'console',
  },
  {
    path: 'console',
    loadComponent: () =>
      import('../pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    children: [
      {
        path: 'products',
        loadComponent: () =>
          import('../pages/products/products.component').then(
            (m) => m.ProductsComponent
          ),
      },
      {
        path: 'customers',
        loadComponent: () =>
          import('../pages/customers/customers.component').then(
            (m) => m.CustomersComponent
          ),
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('../pages/orders/orders.component').then(
            (m) => m.OrdersComponent
          ),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../pages/settings/settings.component').then(
            (m) => m.SettingsComponent
          ),
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('../pages/notifications/notifications.component').then(
            (m) => m.NotificationsComponent
          ),
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('../pages/reports/reports.component').then(
            (m) => m.ReportsComponent
          ),
      },
    ],
  },
  
  // wild card routes
  {
    path: 'not-found',
    loadComponent: () =>
      import('../pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'not-found',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
