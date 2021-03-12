import { Component, ViewChild } from '@angular/core';
import {AgmMap,MapsAPILoader  } from '@agm/core';
import { Observable } from 'rxjs';
import { AddressService } from 'src/services/address.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(AgmMap,{static: true}) public agmMap: AgmMap;
  title = 'Demoproject';
  zoom: number;
  lat: number;
  lng: number;
  markers : any[];
 
  states = [];
  districts = [];
  selectedState: any;
  selectedDistrict: any;
  constructor(private apiloader: MapsAPILoader,
              private _addressService: AddressService,
              private http: HttpClient,) {
    this.lat = 0;
    this.lng = 0;
    this.zoom = 2;
    this.markers = [];
  }

  ngOnInit()
  // To get the dropdown json data from assets
  {
    this.http.get('assets/drop-down.json').subscribe((data: any) => {
      this.states = data.states;
  });
  // end

  // By default to mark the map to india
    this.markers.push({
    position: {
      lat: 20.5937,
      lng: 78.9629
    },
    label: {
      color: "black",
      text: "India"
    }
  });
 // this.getLocation("Mangalore");
  }
 // end

 // To select dropdown for district on select of state
  selectDistrict() {
    this.districts = this.selectedState.districts;
  }
// end

// To change location of map based on district
  changeMapLocation() {
    this.markers = [];
    this.markers.push({
      position: {
        lat: this.selectedDistrict.latitude,
        lng: this.selectedDistrict.longitude
      },
      label: {
        color: "black",
        text: this.selectedDistrict.name
      }
    });
  }

  // end

// To get the geo location since API is not working and asking for billing not used.

  getLocation(address) {
    let geocoder = new google.maps.Geocoder();
    const obj = {
      address: address
    }

    this._addressService.getlongLat(obj).subscribe(
      (res: any) => {
        console.log('res', res);
        res[0].geometry.location;
      },
      err => {
        console.log("err", err);
      }
    );
    
  }
}
// end





