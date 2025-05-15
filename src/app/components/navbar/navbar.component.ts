import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../auth/login/login.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NgClass, CommonModule, LoginComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  mobileMenuOpen = false;
  isLoginModalOpen = false;

  constructor(private dialog: MatDialog) {}

  closeLoginModal() {
    this.isLoginModalOpen = false;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  openLoginModal() {
    this.dialog.open(LoginComponent, {
      width: '400px',
      panelClass: 'custom-dialog-container',
    });
  }
}
