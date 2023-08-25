import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'console',
  },
  {
    path: 'console',
    loadComponent: () =>
      import('../pages/dashboard/dashboard.component').then(
        (dash) => dash.DashboardComponent
      ),
    children: [
      {
        path: 'products',
        loadComponent: () =>
          import('../pages/products/products.component').then(
            (prdct) => prdct.ProductsComponent
          ),
      },
      {
        path: 'customers',
        loadComponent: () =>
          import('../pages/customers/customers.component').then(
            (custms) => custms.CustomersComponent
          ),
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('../pages/orders/orders.component').then(
            (ords) => ords.OrdersComponent
          ),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../pages/settings/settings.component').then(
            (stgs) => stgs.SettingsComponent
          ),
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('../pages/notifications/notifications.component').then(
            (ntfs) => ntfs.NotificationsComponent
          ),
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('../pages/reports/reports.component').then(
            (rprts) => rprts.ReportsComponent
          ),
      },
    ],
  },
// other routes
  {
    path: 'not-found',
    loadComponent: () =>
      import('../pages/not-found/not-found.component').then(
        (notfound) => notfound.NotFoundComponent
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
