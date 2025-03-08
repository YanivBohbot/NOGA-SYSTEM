import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/Customer';
import { GetDataService } from '../../services/getData.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-CustomersList',
  templateUrl: './CustomersList.component.html',
  styleUrls: ['./CustomersList.component.css'],
})
export class CustomersListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'customerNumber',
    'addresses',
    'contacts',
    'actions',
  ];
  customers: Customer[] = [];

  dataSource = new MatTableDataSource<Customer>();

  constructor(private customerService: GetDataService) {}

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers(): void {
    console.log('Loading customers');
    this.customerService.getCustomers().subscribe(
      (data: Customer[]) => {
        this.customers = data;
        this.dataSource.data = data;
        console.log('Data fetched from backend:', data);
        console.log('datastore:', this.dataSource.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  getCustomerAddresses(customer: any): string {
    return customer.addresses
      ? customer.addresses.map((a: any) => a.city + ', ' + a.street).join('; ')
      : '';
  }

  getCustomersContact(customer: any): string {
    return customer.contacts
      ? customer.contacts
          .map((c: any) => c.fullName + ' (' + c.email + ')')
          .join('; ')
      : '';
  }

  deleteCustomer(id: number) {
    console.log('Deleting customer:', id);
    this.customerService.deleteCustomer(id).subscribe(
      (data: any) => {
        console.log('Data deleted:', data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
    this.loadCustomers();
  }

  openAddCustomerDialog() {
    console.log('Opening add customer dialog');
  }
}
