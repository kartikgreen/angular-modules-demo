import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorComponent implements OnInit {
  monthlyIncome;
  monthlyExpense;

  tenure: string[] = [
    '1 Year',
    '2 Year',
    '3 Year'
  ];

  ngOnInit(): void {
    this.monthlyIncome = 0;
    this.monthlyExpense = 0
  }

}
