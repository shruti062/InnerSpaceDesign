import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  submitForm() {
    console.log(this.formData);
    alert('Thank you! We will contact you soon.');
  }
}
