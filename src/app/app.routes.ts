import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuoteComponent } from './pages/quote/quote.component';
import { CalcprintComponent } from './pages/calcprint/calcprint.component';
import { TestComponent } from './pages/test/test.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quote', component: QuoteComponent },
  {path: 'calcprint', component: CalcprintComponent},
  {path: 'test', component: TestComponent},
  { path: '**', redirectTo: '' }
];

