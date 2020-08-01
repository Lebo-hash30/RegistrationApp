import { Component } from '@angular/core'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RegistrationApp';
  registration =  new Array();

  addRegistration: number = 0;
  name: string = '';
  surname: string = '';
  id: string = '';
  email: string = '';
  contact: string = '';

  adddRegistration() {
    this.addRegistration += 1;
  }



  

  
}







