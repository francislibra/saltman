import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { ContentComponent } from './components/content/content.component';
import { AppsettingsComponent } from './components/appsettings/appsettings.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';

import { SaltService} from './services/salt.service';
import { SaltPipe } from './pipes/salt.pipe';
import { LoginComponent } from './components/login/login.component';
import { MinionsComponent } from './components/minions/minions.component';

import { routing } from './app-routing';


@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppsettingsComponent,
    ContentComponent,
    AppfooterComponent,
    LoginComponent,
    MinionsComponent,
    SaltPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  
  providers: [SaltService],
  bootstrap: [AppComponent]
})
export class AppModule { }
