import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { SpotifyService } from './services/spotify.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  animations: [],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule,
    NgxSpinnerModule,
    HomeScreenComponent,
    ScrollingModule,
    HttpClientModule],
  providers: [
    SpotifyService,
  ]
})
export class AppComponent implements OnInit {
  constructor(private _spinner: NgxSpinnerService) { }

  
  ngOnInit(): void {
    this._spinner.show();
    setTimeout(() => {
      this._spinner.hide();
    }, 1000);
  }

}
