import { Component , Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
import axios from 'axios';
import { Meteo } from '../Interface/meteo.interface';
import { API_KEY } from '../env';
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
  meteo : Meteo = {
    temp : 0,
    city : "",
    img : "",
    condition : "",
    forecast : []
  };
  @Output() newItemEvent = new EventEmitter<Meteo>(); 

  onKey(e : Event){
    this.value = (e.target as HTMLInputElement).value;
  }

  onClick(){
    this.click = !this.click;

    if (this.value == ""){
        alert("input must me a valid city name");
        return;
    }

    axios.get(this.apiUrl, {
        params : {
            key : API_KEY,
            q : this.value,
            days : 2
        }
      })
      .then(response => {
        console.log(response.data);
        this.meteo = {
          temp : response.data.current.temp_c,
          city : response.data.location.name,
          img : response.data.current.condition.icon,
          condition : response.data.current.condition.text,
          forecast : response.data.forecast.forecastday,
        }
        this.newItemEvent.emit(this.meteo);
      })
      .catch(error => {
        alert('Error fetching data: ' + error.message);
        console.error('Error fetching data:', error);
      });
  }
}
