import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
    const formDataEncoded = new URLSearchParams({
      'form-name': 'contact',
      name: this.formData.name,
      email: this.formData.email,
      phone: this.formData.phone,
      message: this.formData.message
    });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formDataEncoded.toString()
    })
    .then(() => {
      alert('Message sent successfully!');
      this.formData = { name: '', email: '', phone: '', message: '' };
    })
    .catch(() => {
      alert('Something went wrong. Try again!');
    });
  }
}