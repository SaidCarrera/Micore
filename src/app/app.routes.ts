import { Routes } from '@angular/router';
import { SalesDashboardComponent } from './components/sales-dashboard/sales-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: SalesDashboardComponent }
];