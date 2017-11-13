import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppsettingsComponent } from './components/appsettings/appsettings.component';

import { SaltService} from './services/salt.service';
import { SaltPipe } from './pipes/salt.pipe';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: ''     ,component: AppComponent  , data: { title: 'Home' }},
  { path: 'login',component: LoginComponent, data: { title: 'Login' }}
];

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    SaltPipe,
    LoginComponent
  ],
  imports: [

    RouterModule.forRoot(appRoutes),

    BrowserModule,
    HttpModule
  ],
  providers: [SaltService],
  bootstrap: [AppComponent]
})
export class AppModule { }
