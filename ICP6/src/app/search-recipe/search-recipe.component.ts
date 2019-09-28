import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  @ViewChild('recipe') recipes: ElementRef;
  @ViewChild('place') places: ElementRef;
  recipeValue: any;
  placeValue: any;
  venueList: any;
  recipeList: any;

  currentLat: any;
  currentLong: any;
  geolocationPosition: any;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
      });
  }

  getVenues() {

    this.recipeValue = this.recipes.nativeElement.value;
    this.placeValue = this.places.nativeElement.value;
    if (this.recipeValue !== null) {
      this._http.get('https://api.edamam.com/search?q=' + this.recipeValue +
        '&app_id=978afb53&app_key=3fa165424a2ddb8a9d8578a2a430e712').
          subscribe(respReceipe => {
            this.recipeList = respReceipe['hits'];
          }, error => {});

    }

    if (this.placeValue != null && this.placeValue !== '') {
      this._http.get('https://api.foursquare.com/v2/venues/search?client_id=YFMKQYRTN2KHDPHHEWRDQLRFPDXUM31EN1HSCAYWTYYNJZWU' +
        '&client_secret=FWFROLKEYZPMTX2B15N0EOZN21VVJ5UJTCFX5O3XSRURHSS5&v=20190926&near=' + this.placeValue + '&query=restaurant').
      subscribe(respRestuarant => {
        this.venueList = respRestuarant['response']['venues'];
      }, error => {});
    }
  }
}
