import { Component , Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
import axios from 'axios';
import { Meteo } from '../Interface/meteo.interface';
import { MeteoNetwork } from '../network/Meteo.network';
const API_KEY = localStorage.getItem("API_KEY");
@Component({
  selector: 'my-component',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './MyComponent.component.html',
  styleUrl: './MyComponent.component.css'
})
export class MyComponent {

  title = 'MyComponent';
  value = "";
  apiUrl = "https://api.weatherapi.com/v1/forecast.json"
  click = false;
  meteonetwork = new MeteoNetwork({}, this.apiUrl);
  @Output() newItemEvent = new EventEmitter<Meteo>(); 

  onKey(e : Event){
    this.value = (e.target as HTMLInputElement).value;
  }

  onClick(){
    if (this.value == ""){
        alert("input must me a valid city name");
        return;
    }
    this.meteonetwork.Forecast({key : API_KEY, q : this.value, day : 3}).then((meteo) =>{
      if (meteo != null){
        this.newItemEvent.emit(meteo);
      }
    });
  }
}
