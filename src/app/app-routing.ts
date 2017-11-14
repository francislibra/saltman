import { ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MinionsComponent } from './components/minions/minions.component';

const appRoutes: Routes = [
  { path: ''       ,component: AppComponent    },
  { path: 'login'  ,component: LoginComponent  },
  { path: 'minions',component: MinionsComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


