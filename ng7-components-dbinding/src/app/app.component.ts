import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';
import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'ng7-components-dbinding';
  // loadedFeature = 'recipe';

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }

  // constructor(private authService: AuthService,
  //             private loggingService: LoggingService) {}

  constructor(private store: Store<fromApp.AppState>,
              private loggingService: LoggingService) {}

  ngOnInit() {
    // this.authService.autoLogin();
    this.store.dispatch(new AuthActions.AutoLogin()); 
    this.loggingService.printLog('Hello from AppComponent ngOnInit');
  }
}
