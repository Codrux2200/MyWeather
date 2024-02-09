import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes'; 
import { provideRouter } from '@angular/router';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) //registering routes
  ]
}).catch((err) => console.error(err));