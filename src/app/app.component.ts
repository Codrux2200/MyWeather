import { Component, Input  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponent } from '../myComponent/MyComponent.component';
import { Meteo } from '../Interface/meteo.interface';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

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
