import { Component, OnInit } from '@angular/core';
import { GetDataService } from './services/getData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'NOGA-SYSTEM';

  constructor(private dataService: GetDataService) {}

  ngOnInit(): void {
    // this.getDataFromBackend();
  }

  // getDataFromBackend(): void {
  //   console.log('Getting data from backend');
  //   this.dataService.getProducts().subscribe(
  //     (data) => {
  //       console.log('Data received:', data);
  //     },
  //     (error) => {
  //       console.error('Error fetching data:', error);
  //     }
  //   );
  // }
}
