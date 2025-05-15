import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { CalculationService } from '../../services/calculation.service';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ButtonComponent],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {
  printForm: FormGroup;
  submitted = false;
  calculationComplete = false;

  // Results
  volume = 0;
  weight = 0;
  cost = 0;

  constructor(private formBuilder: FormBuilder, private calculationService: CalculationService) {
    this.printForm = this.formBuilder.group({
      width: [null, [Validators.required, Validators.min(0.1)]],
      height: [null, [Validators.required, Validators.min(0.1)]],
      length: [null, [Validators.required, Validators.min(0.1)]],
    });
  }

  // Getter for easy access to form fields
  get f() {
    return this.printForm.controls;
  }

  calculateCost() {
    this.submitted = true;

    // Stop if form is invalid
    if (this.printForm.invalid) {
      return;
    }

    // Get form values
    const { width, height, length } = this.printForm.value;

    // Perform calculation using the service
    this.calculationService.calculateCost(width, height, length);

    // Retrieve results from the service
    const results = this.calculationService.getResults();
    this.volume = results.volume;
    this.weight = results.weight;
    this.cost = results.cost;

    this.calculationComplete = true;
  }
}
