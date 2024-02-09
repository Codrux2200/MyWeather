import { Component, Input  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponent } from '../myComponent/MyComponent.component';
import { Meteo } from '../Interface/meteo.interface';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
