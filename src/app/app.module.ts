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

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    SaltPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SaltService],
  bootstrap: [AppComponent]
})
export class AppModule { }
