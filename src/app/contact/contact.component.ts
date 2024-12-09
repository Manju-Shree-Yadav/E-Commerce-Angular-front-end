import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  onSubmit() {
    console.log('Form submitted');
    alert('Thank you for your message! We will get back to you soon.');
  }
}
