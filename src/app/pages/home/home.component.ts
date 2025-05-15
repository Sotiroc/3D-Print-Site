import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../modules/shared.module';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-home',
  imports: [RouterLink,CommonModule, SharedModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Correct property name
  
})
export class HomeComponent {
  showFunkyCard = false;

  openFunkyCard() {
    this.showFunkyCard = true;
  }

  closeFunkyCard() {
    this.showFunkyCard = false;
  }
}
