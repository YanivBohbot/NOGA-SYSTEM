import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetDataService } from '../../services/getData.service';

@Component({
  selector: 'app-CustomerForm',
  templateUrl: './CustomerForm.component.html',
  styleUrls: ['./CustomerForm.component.css'],
})
export class CustomerFormComponent implements OnInit {
  customerForm!: FormGroup;
  customerId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private customerService: GetDataService
  ) {}

  ngOnInit(): void {
    // קבלת ה-ID מה-URL
    this.customerId = Number(this.route.snapshot.paramMap.get('id'));

    // יצירת טופס
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      customerNumber: ['', Validators.required],
      addresses: this.fb.array([]),
      contacts: this.fb.array([])
    });


    // טעינת הנתונים ללקוח מה-API
    this.customerService
      .getCustomerbyId(this.customerId)
      .subscribe((customer) => {
        this.customerForm.patchValue({
          name: customer.name,
          customerNumber: customer.customerNumber,
        });
      });
  }

  // שמירת העדכון
  saveChanges() {
    if (this.customerForm.valid) {
      this.customerService
        .updateCustomer(this.customerForm.value)
        .subscribe(() => {
          alert('Customer updated successfully!');
          this.router.navigate(['/customers']);
        });
    }
  }
}
