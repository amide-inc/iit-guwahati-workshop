import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data;
  cityName = ""
  currnetCity = "Kolkata"
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.getData()
  }
  search() {
    this.currnetCity = this.cityName;
    this.getData()
  }

  getData() {
    this.service.getWeatherdata(this.currnetCity)
        .subscribe((res) => {
          this.data  = res;
        })
  }

}
