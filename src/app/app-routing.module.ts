import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './HomePage/HomePage.component';
import { CustomersListComponent } from './components/CustomersList/CustomersList.component';
import { DetailsCustomersComponent } from './components/DetailsCustomers/DetailsCustomers.component';
import { CustomerFormComponent } from './components/CustomerForm/CustomerForm.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'customers', component: CustomersListComponent },
  { path: 'customers/:id', component: DetailsCustomersComponent },
  { path: 'customers/:id/edit', component: CustomerFormComponent },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
