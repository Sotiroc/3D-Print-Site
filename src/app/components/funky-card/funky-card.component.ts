import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funky-card',
  templateUrl: './funky-card.component.html',
  styleUrls: ['./funky-card.component.css']
})
export class FunkyCardComponent {
  @Output() close = new EventEmitter<void>();

  closeFunkyCard() {
    this.close.emit();
  }
}
