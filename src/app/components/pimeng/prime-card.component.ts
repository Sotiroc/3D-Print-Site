import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'prime-card',
  standalone: true,
  imports: [CardModule, ButtonModule, ],
  templateUrl: './prime-card.component.html',
  styleUrl: './prime-card.component.css',
})
export class PrimeCardComponent {
  @Input() imageSrc: string = '';
  @Input() cardTitle: string = '';
  @Input() cardContent: string = '';
}
