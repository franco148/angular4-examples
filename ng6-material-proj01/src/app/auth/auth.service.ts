import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';

import { Subject } from 'rxjs';

import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { TrainingService } from '../training/training.service';
import { UIService } from '../shared/ui.service';
import * as fromRoot from '../app.reducer';
import * as UI from '../shared/ui.actions';
import * as Auth from './auth.actions';




// The following decorator allows us to make the service injectable.
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // authChange = new Subject<boolean>();
  // private user: User;
  private isAuthenticated = false;

  // Before using this sevice in other places and use the same instance of it, we need to provide it
  // For that, we need to add as provider in our app.module.ts file
  // providers: [AuthService]
  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              private trainingService: TrainingService,
              private uiService: UIService,
              private store: Store<{ui: fromRoot.State}>) { }

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        // this.isAuthenticated = true;
        this.store.dispatch(new Auth.SetAuthenticated());
        // this.authChange.next(true);
        this.router.navigate(['/training']);
      } else {
        this.trainingService.cancelSubscriptions();
        // this.isAuthenticated = false;
        this.store.dispatch(new Auth.SetUnauthenticated());
        // this.authChange.next(false);
        this.router.navigate(['/login']);
      }
    });
  }

  registerUser(authData: AuthData) {
    // For now we are not calling a sevice. So information will be dummy information.
    // this.user = {
    //   email: authData.email,
    //   userId: Math.round(Math.random() * 10000).toString()
    // };

    // this.uiService.loadingStateChanged.next(true);
    // this.store.dispatch({type: fromApp.LoadingStates.START});
    this.store.dispatch(new UI.StartLoading());

    // Replace previous call with AngularFire approach.
    this.afAuth.auth.createUserWithEmailAndPassword(
      authData.email,
      authData.password
    ).then(result => {
      // this.store.dispatch({type: fromApp.LoadingStates.STOP});
      this.store.dispatch(new UI.StopLoading());
    }).catch(error => {
      // this.uiService.loadingStateChanged.next(false);
      // this.store.dispatch({type: fromApp.LoadingStates.STOP});
      this.store.dispatch(new UI.StopLoading());
      // Replaced with a externalized snackbar
      this.uiService.showSnackbar(error.message, null, 3000);
    });

    // this.authSuccessfully();
  }

  login(authData: AuthData) {

    // this.uiService.loadingStateChanged.next(true);
    // this.store.dispatch({type: fromApp.LoadingStates.START});
    this.store.dispatch(new UI.StartLoading());

    // Replace previous call with AngularFire approach.
    this.afAuth.auth.signInWithEmailAndPassword(
      authData.email,
      authData.password
    ).then(result => {
      // this.uiService.loadingStateChanged.next(false);
      // this.store.dispatch({type: fromApp.LoadingStates.STOP});
      this.store.dispatch(new UI.StopLoading());
    }).catch(error => {
      // this.uiService.loadingStateChanged.next(false);
      // this.store.dispatch({type: fromApp.LoadingStates.STOP});
      this.store.dispatch(new UI.StopLoading());

      // Replaced with a externalized snackbar
      this.uiService.showSnackbar(error.message, null, 3000);
    });

  }

  logout() {
    // this.user = null;
    this.afAuth.auth.signOut();
  }

  isAuth() {
    // return this.user != null;
    // return this.isAuthenticated;
  }
}
