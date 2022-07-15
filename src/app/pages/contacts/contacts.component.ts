import { Component,  } from '@angular/core';
import { ContactInterface } from './contact-interface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent  {
  contact : ContactInterface[] = [];
  constructor(){
    this.contact.push({
    firstName: 'Omer',
    lastName: 'Cohen',
    email: 'omer94@gmail.com',
    birthday: '15/02/1994',
    phone: '0526807753',
    age: 28
   });


  }
  

}
