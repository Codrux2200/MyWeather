import { Routes } from '@angular/router';
import { ApiKeyComponent } from './ApiKey/ApiKey/ApiKey.component';
import { BaseAppComponent } from '../base-app/base-app.component';
import { AuthGuard } from '../guard/Gard.service';
export const routes: Routes = [ 
    { path: '', component: BaseAppComponent, canActivate : [AuthGuard] },
    { path: 'api', component: ApiKeyComponent }];
