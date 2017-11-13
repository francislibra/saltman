import { Component, OnInit } from '@angular/core';
import {SaltService} from './services/salt.service';
import {Minions} from './components/minions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SaltService]
})

export class AppComponent implements OnInit {

  public minionsArray: Minions[];
  public counter = 0;
  constructor ( private saltService: SaltService) {
  }

  getMinions(): void {
    this.saltService.getMinions()
        .subscribe(
          resultArray => this.minionsArray = resultArray,
          error => console.log('Error ::' + error)
        );
  }

  ngOnInit() {
     this.getMinions();
  }
}
