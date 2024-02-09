import { Component, OnInit } from '@angular/core';
import { Meteo } from '../Interface/meteo.interface';
import { MyComponent } from '../myComponent/MyComponent.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-base-app',
  imports : [MyComponent, RouterModule],
  templateUrl: './base-app.component.html',
  styleUrls: ['./base-app.component.css'],
  standalone : true,
})
export class BaseAppComponent {
  title = 'my-google';
  item = {};
  city = "No City";
  currentTemp = 0;
  currentDate = "";
  currentIcon = "https://cdn-icons-png.flaticon.com/512/1779/1779940.png";
  currentCondition = "";

  addItem(newItem: Meteo) {
    this.item = newItem;
    console.log(newItem);
    this.city = newItem?.city;
    this.currentTemp = newItem?.temp;
    this.currentDate = "Today";
    this.currentIcon = newItem?.img;
    this.currentCondition = newItem?.condition;
  }
}
