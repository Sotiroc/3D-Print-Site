import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../model/user.model';
import { FireService } from '../../services/fire.service';

@Component({
  selector: 'app-test',
  imports: [NgClass, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  isHighlighted = false;

  newUser: User = { id: undefined, name: '', email: '', phone: '' }; // Set id to undefined initially

  constructor(private fireService: FireService) {}

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
    console.log('isHighlighted:', this.isHighlighted);
  }

  addUser() {
    // Validate that all fields are filled
    if (!this.newUser.name || !this.newUser.email || !this.newUser.phone) {
      console.error('All fields must be filled before adding a user.');
      return;
    }

    // Add user to Firebase
    this.fireService.addUser(this.newUser)
      .then(() => {
        console.log('User added successfully to Firebase!');
        // Reset newUser to default values
        this.newUser = { id: undefined, name: '', email: '', phone: '' };
      })
      .catch((error) => {
        console.error('Error adding user to Firebase:', error);
      });
  }
}