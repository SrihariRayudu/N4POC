import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';


const routes: Routes = [
  
  // { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  // { path: 'p', loadChildren: './pages/pages.module#PagesModule' },
  { path: 'inventory', component: InventoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
