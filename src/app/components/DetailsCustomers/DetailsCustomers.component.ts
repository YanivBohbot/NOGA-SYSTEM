import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { GetDataService } from 'src/app/services/getData.service';

@Component({
  selector: 'app-DetailsCustomers',
  templateUrl: './DetailsCustomers.component.html',
  styleUrls: ['./DetailsCustomers.component.css'],
})
export class DetailsCustomersComponent implements OnInit {
  customer: Customer | null = null;
  editForm: FormGroup;
  isEditing = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: GetDataService,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      name: [''],
      customerNumber: [''],
      addresses: [''],
      contacts: [''],
    });
  }

  ngOnInit() {
    const customerId = this.route.snapshot.paramMap.get('id');

    if (customerId) {
      this.customerService
        .getCustomerbyId(Number(customerId))
        .subscribe((data) => {
          this.customer = data;
          this.editForm.patchValue({
            name: data.name,
            email: data.customerNumber,
            addresses: data.addresses,
            contacts: data.contacts,
          });
        });
    }
  }

  deleteCustomer(): void {
    if (this.customer) {
      this.customerService.deleteCustomer(this.customer.id).subscribe(() => {
        alert('Customer deleted successfully!');
        this.router.navigate(['/customers']);
      });
    }
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  updateCustomer(): void {
    if (this.customer) {
      const updatedCustomer: Customer = {
        ...this.customer,
        ...this.editForm.value,
      };
      console.log('Updated customer:', updatedCustomer);
      this.customerService.updateCustomer(updatedCustomer).subscribe(
        () => {
          this.customer = updatedCustomer;
          this.isEditing = false;
        },
        (error) => {
          console.error('Update failed:', error);
        }
      );
    }
  }
}
