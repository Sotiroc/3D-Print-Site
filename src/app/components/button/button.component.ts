import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() styleClass: string = '';

  @Output() buttonClick = new EventEmitter<void>();

  onClick(){
    this.buttonClick.emit();
  }
  
}



// Include functions that must be resuable 
// include requirements 
// Have single responsibility