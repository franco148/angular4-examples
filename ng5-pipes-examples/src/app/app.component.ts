import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = "Franco";
  myArray = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  newNumber = 0.234;

  salary = 1234.5;

  hero = {
    name: "Logan",
    key: "Wolverine",
    age: 500,
    address: {
      street: "Eudoro Galindo",
      number: 1915
    }
  }

  valueOfPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('Data has arrived!'), 3500);
  });

  birthDate = new Date();

  myCompleteName = "fraNCo RobErt arratiA lOpez";

  youtubeVideo = "I8SKx28hKAc";

  youtubeVideo2 = "https://www.youtube.com/embed/I8SKx28hKAc"

  myPassword = "MySecurePass";
  isEnabled = true;
  
}
