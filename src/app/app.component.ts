import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'RegistrationApp';
  Firstname ;
  Surname;
  ID;
  Email;
  Contact;



  
  list :any  =[] ;

  constructor( ){

  }


  addUser(){

    let user = {
      Firstname: this.Firstname ,
      Surname: this.Surname ,
      ID: this.ID,
      Email : this.Email,
      Contact: this.Contact,
    }
    
this.list.push(user)  ;

    console.log(this.list)



  }


  deleteUser(i){

    
    this.list.splice( i, 1)

    console.log(this.deleteUser)

  }

  updateUser(){
    let user = {
      Surname: this.Surname,
      Email: this.Email,
      Contact: this.Contact,

    
  }
  this.list.splice(0, 1)
    console.log(this.list)
    this.list.push(user);
}
}









