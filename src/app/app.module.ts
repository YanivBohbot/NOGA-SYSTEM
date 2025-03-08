import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GetDataService } from './services/getData.service';
import { HomePageComponent } from './components/HomePage/HomePage.component';
import { CustomersListComponent } from './components/CustomersList/CustomersList.component';
import { DetailsCustomersComponent } from './components/DetailsCustomers/DetailsCustomers.component';
import { HeaderComponent } from './layout/Header/Header.component';
import { FooterComponent } from './layout/Footer/Footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
// import { LayoutModule } from './layout/layout.module';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomePageComponent,
    CustomersListComponent,
    DetailsCustomersComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    //  LayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
