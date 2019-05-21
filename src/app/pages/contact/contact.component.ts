import { Component } from '@angular/core';
import { formDirectiveProvider } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  formData: {
    name: string;
    email: string;
    message: string;
  } = {
    name: '',
    email: '',
    message: '',
  };

  constructor() {}

  submit() {
    console.log(this.formData); 
  }
}
