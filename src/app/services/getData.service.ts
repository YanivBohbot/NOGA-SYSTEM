import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';

@Injectable()
export class GetDataService {
  private api_url = env.API_URL;

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    console.log('Getting data from backend');
    return this.http.get<Customer[]>(this.api_url);
  }

  getCustomerbyId(id: number): Observable<Customer> {
    console.log('service calling backend to get a customer:');
    return this.http.get<Customer>(`${this.api_url}/${id}`);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    console.log('service calling backend to post new customer:', customer);
    return this.http.post<Customer>(this.api_url, customer);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    console.log('service calling backend to update customer:', customer);
    return this.http.put<Customer>(`${this.api_url}/${customer.id}`, customer);
  }

  deleteCustomer(id: number): Observable<void> {
    console.log('service calling backend to delete a customer:');
    return this.http.delete<void>(`${this.api_url}/${id}`);
  }
}
