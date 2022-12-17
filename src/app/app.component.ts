import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name?: string;
  paymentDate?: string;
  amount?: number;
  height?: number;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2019,
  };

  onNameChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.name = value;
  }

  onDateChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.paymentDate = value;
  }

  onAmountChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.amount = parseFloat(value);
  }

  onHeightChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.height = parseFloat(value);
  }
}
