import { Component, VERSION } from '@angular/core';

import { CovidService } from './covid.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private covid: CovidService) {}
  country: any = null;
  CountryData: any = null;
  WholeData: any = null;
  handleChange(e: any) {
    this.country = e;
    console.log(this.country);
    this.WholeData.forEach((each) => {
      if (each.Country_Region.toLowerCase() == this.country.toLowerCase()) {
        this.CountryData = each;
        return false;
      }
    });
    console.log(this.CountryData);
  }
  ngOnInit() {
    this.covid.getCovidData().subscribe((data) => {
      this.WholeData = data.rawData;
      console.log(this.WholeData);
    });
  }
}
