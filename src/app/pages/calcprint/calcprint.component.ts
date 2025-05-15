import { Component, OnInit } from '@angular/core'; // Import OnInit
import { CommonModule } from '@angular/common';
import { CalculationService } from '../../services/calculation.service';

@Component({
  selector: 'app-calcprint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calcprint.component.html',
  styleUrl: './calcprint.component.css',
})
export class CalcprintComponent implements OnInit {
  // Initialize results with default values
  resultsFromObservable = { volume: 0, weight: 0, cost: 0 };

  constructor(private calculationService: CalculationService) {}

  ngOnInit(): void {
    // Subscribe to the results observable from the CalculationService
    this.calculationService.results$.subscribe((dataStream) => {
      this.resultsFromObservable = dataStream;
      
    });
  }
}