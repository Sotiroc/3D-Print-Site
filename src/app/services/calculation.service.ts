import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  // Material density constant (g/cm³) - using PLA plastic as an example
  private readonly DENSITY_CONSTANT = 1.24;
  // Cost per gram in Rand
  private readonly COST_PER_GRAM = 0.35;

  // BehaviorSubject to store and emit calculation results
  private resultsSubject = new BehaviorSubject<{ volume: number; weight: number; cost: number }>({
    volume: 0,
    weight: 0,
    cost: 0,
  });

   // Observable for components to subscribe to
   // Streams updates to subscribers of results$ by poassing along the values
   // Gets stream from resultsSubject
   results$: Observable<{ volume: number; weight: number; cost: number }> = this.resultsSubject.asObservable(); //The .asObservable() 
   // method is used to convert a BehaviorSubject into a read-only Observable.

   //Calculation function - when called the results are calculated and emitted
   calculateCost(width: number, height: number, length: number): void {
    const volume = width * height * length;
    const weight = volume * this.DENSITY_CONSTANT;
    const cost = weight * this.COST_PER_GRAM;

    // Emit the new results and stores them in the BehaviorSubject
    this.resultsSubject.next({ volume, weight, cost });
  }


  getResults() {
    return this.resultsSubject.value;
  }
}