import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  order: string = 'lastname';
  person = {
    firstname: 'Coder',
    lastname: 'Byte',
    phonenumber: '8885559999',
  };

  persons = [
    { firstname: 'juan', lastname: 'otero', phonenumber: '6541651561' },
    { firstname: 'diego', lastname: 'abril', phonenumber: '5165' },
  ];

  add() {
    this.persons.push({
      firstname: this.person.firstname,
      lastname: this.person.lastname,
      phonenumber: this.person.phonenumber,
    });
    this.person.firstname = null;
    this.person.lastname = null;
    this.person.phonenumber = null;
  }
}
