import { Component, Injectable, Input, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { ConfirmationService, Message, SelectItem } from "primeng/api";
import { Table } from 'primeng/table';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { DatePipe } from '@angular/common';
declare var $: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent {

    cars: any;

    cols: any[];

    brands: SelectItem[];

    colors: SelectItem[];

    yearFilter: number;

    yearTimeout: any;
    selectedCar: any;
    @ViewChild('dt') dt: Table;

  constructor(private datePipe: DatePipe) {
   this.brands = [
            { label: 'All Brands', value: null },
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];

        this.colors = [
            { label: 'White', value: 'White' },
            { label: 'Green', value: 'Green' },
            { label: 'Silver', value: 'Silver' },
            { label: 'Black', value: 'Black' },
            { label: 'Red', value: 'Red' },
            { label: 'Maroon', value: 'Maroon' },
            { label: 'Brown', value: 'Brown' },
            { label: 'Orange', value: 'Orange' },
            { label: 'Blue', value: 'Blue' }
        ];

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
       this.cars = [
      { "brand": "VW", "year": 1000000000, "color": "Orange", "vin": "dsad231ff" },
      { "brand": "Audi", "year": 2000000000, "color": "Black", "vin": "gwregre345" },
      { "brand": "Renault", "year": 3000000000, "color": "Gray", "vin": "h354htr" },
      { "brand": "BMW", "year": 4000000000, "color": "Blue", "vin": "j6w54qgh" },
      { "brand": "Mercedes", "year": 2500000000, "color": "Orange", "vin": "hrtwy34" },
      { "brand": "Volvo", "year": 5000000000, "color": "Black", "vin": "jejtyj" },
      { "brand": "Honda", "year": 6800000000, "color": "Yellow", "vin": "g43gr" },
      { "brand": "Jaguar", "year": 1200000000, "color": "Orange", "vin": "greg34" },
      { "brand": "Ford", "year": 9000000000, "color": "Black", "vin": "h54hw5" },
      { "brand": "Fiat", "year": 120000000000, "color": "Red", "vin": "245t2s" }
    ];
   
  }
 onRowSelect(event) {
    this.selectedCar = event.data;
     
  }
  setFileName(dt){
   this.dt.exportFilename="bro.csv";
   this.dt.exportCSV();
    
   // this.dt.nativeElement.exportCSV();
  }
}
