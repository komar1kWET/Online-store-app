import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductDetailComponent} from './modules/product/product-detail/product-detail.component';
import {ProductComponent} from './modules/product/product/product.component';
import {PriceDetailComponent} from './modules/product/price-detail/price-detail.component';
import {AdminDashboardComponent} from './modules/admin/admin-dashboard/admin-dashboard.component';
import {EditModalComponent} from './modules/admin/edit-modal/edit-modal.component';
import {AdminPanelComponent} from './modules/admin/admin-panel/admin-panel.component';
import {AddModalComponent} from './modules/admin/add-modal/add-modal.component';
import {CheckUserGuard} from './guards/check-user.guard';


const routes: Routes = [
  { path: '', redirectTo: '/consumer-view', pathMatch: 'full'},
  { path: 'product-detail/:id', component: ProductDetailComponent},
  { path: 'price-detail/:id', component: PriceDetailComponent},
  { path: 'consumer-view', component: ProductComponent},
  { path: 'admin-table', component: AdminDashboardComponent, canActivate: [CheckUserGuard], children: []},
  { path: 'admin-table/:id', component: EditModalComponent},
  { path: 'login', component: AdminPanelComponent},
  { path: 'add-modal', component: AddModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
