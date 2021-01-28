import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsulinCalculatorComponent } from './insulin-calculator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [ InsulinCalculatorComponent ],
	imports: [ CommonModule, FormsModule ],
	exports: [ InsulinCalculatorComponent ]
})
export class InsulinCalculatorModule {}
