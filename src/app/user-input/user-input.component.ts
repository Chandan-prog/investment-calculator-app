import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
  }>();

  enteredInitialInvestment = 0;
  enteredAnualInvestment = 0;
  enteredDuration = 5;
  enteredExpectedReturn = 10;

  onSubmit() {
    // console.log(this.enteredInitialInvestment);
    // console.log(this.enteredAnualInvestment);
    // console.log(this.enteredExpectedReturn);
    // console.log(this.enteredDuration);

    //emit one event that will be caught in app comp
    this.calculate.emit({
      initialInvestment: this.enteredInitialInvestment,
      duration: this.enteredDuration,
      expectedReturn: this.enteredExpectedReturn,
      annualInvestment: this.enteredAnualInvestment,
    });
  }
}
