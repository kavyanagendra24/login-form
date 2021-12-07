import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  email: string;
  password: string;
  loginuser() {
    if (this.email == 'admin@gmail.com' && this.password == 'Admin@123') {
      console.log('welcome');
    } else {
      console.log('User unauthorized');
    }
  }
}
