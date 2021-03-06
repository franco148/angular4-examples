import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUserNames = ['Chris', 'Anna'];

  ngOnInit() {
    // this.signupForm = new FormGroup({
    //   'username': new FormControl(null, Validators.required),
    //   'email': new FormControl(null, [Validators.required, Validators.email]),
    //   'gender': new FormControl('male')
    // });

    // Adding our first custom validator we are going to get an error. What is wrong there?
    // The error is how javascript handles this keyword. That happens because angular is going to
    // execute the validation, not us. So we actually need to bind THIS.
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this))
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]) // Can be initialized with some default values.
    });

    // this.signupForm.valueChanges.subscribe((value)=>console.log(value));
    // this.signupForm.statusChanges.subscribe((value) => console.log(value));

    // this.signupForm.setValue({
    //   // And add the structure of your json
    // });

    // this.signupForm.patchValue({
    //   // Update only the required one
    // });
  }

  onSubmit() {
    console.log(this.signupForm);
    // this.signupForm.reset(); // For reseting the data once clicked submit button.
    // Do not want to clear the radio buttons? Keep in mind: You can pass an object
    // to reset() to reset to specific values!
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);

    // We need to explicitly cast
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }

    return null;
  }

  // Asynchronous Validators
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          return null;
        }
      }, 1500);
    });

    return promise;
  }
}
