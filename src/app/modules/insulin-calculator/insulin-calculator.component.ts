import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { InsulinCalculatorService } from './insulin-calculator.service';

export interface InsulinCalculatorOutput {
	dailyInsulinDose: number;
	intakeCarbs: number;
	carbRatio: number;
	mealBolus: number;
	currentGlucose: number;
	targetGlucose: number;
	sensitivityFactor: number;
	correctionBolus: number;
	totalDosage: number;
}

@Component({
	selector: 'insulin-calculator',
	templateUrl: './insulin-calculator.component.html',
	styleUrls: [ './insulin-calculator.component.scss' ]
})
export class InsulinCalculatorComponent implements OnInit {
	@Input() targetGlucose: number = 100;
	@Input() sensitivityFactorConst: number = 1800;
	@Input() mealBolusConst: number = 500;
	@Input()
	labels = {
		sensitivityFactor: {
			title: 'Sensitivy factor',
			label: 'Total daily insulin dose',
			measure: 'units'
		},
		correctionBolus: {
			title: 'Correction bolus',
			currentGlucose: {
				label: 'Current blood glucose',
				measure: 'mg/dL'
			},
			targetGlucose: {
				label: 'Target blood glucose',
				measure: 'mg/dL'
			},
			sensitivityFactor: {
				label: 'Insulin sensitivity factor',
				measure: 'mg/dL'
			},
			result: {
				label: 'Insulin dose',
				measure: 'units'
			}
		},
		mealBolus: {
			title: 'Meal bolus',
			intakeCarbs: {
				label: 'Intake carbs',
				measure: 'g'
			},
			carbRatio: {
				label: 'Carb ratio',
				measure: 'g'
			},
			result: {
				label: 'Insulin dose',
				measure: 'units'
			}
		},
		totalResult: {
			title: 'Total insulin dose',
			label: 'Meal + Correction bolus',
			measure: 'units'
		}
	};
	@Output() valuesChange: EventEmitter<InsulinCalculatorOutput> = new EventEmitter();
	dailyInsulinDose = 0;
	sensitivityFactor = 0;
	intakeCarbs = 0;
	carbRatio = 0;
	mealBolus = 0;
	currentGlucose: number = this.targetGlucose;
	correctionBolus = 0;

	constructor(private insulinCalculatorService: InsulinCalculatorService) {}

	ngOnInit(): void {}

	sensitivityFactorCalc(): void {
		this.sensitivityFactor = this.insulinCalculatorService.sensitivityFactorCalc(
			this.dailyInsulinDose,
			this.sensitivityFactorConst
		);
		this.mealBolusCalc(false);
		this.correctionBolusCalc(true);
	}

	mealBolusCalc(emit = true): void {
		const mealBolusCalc = this.insulinCalculatorService.mealBolusCalc(
			this.intakeCarbs,
			this.dailyInsulinDose,
			this.mealBolusConst
		);
		this.carbRatio = mealBolusCalc.carbCoveragePerUnit;
		this.mealBolus = mealBolusCalc.mealBolus;
		this.onValuesChange(emit);
	}

	correctionBolusCalc(emit = true): void {
		this.correctionBolus = this.insulinCalculatorService.correctionBolusCalc(
			this.currentGlucose,
			this.targetGlucose,
			this.sensitivityFactor
		);
		this.onValuesChange(emit);
	}

	onValuesChange(emit = true): void {
		const output: InsulinCalculatorOutput = {
			dailyInsulinDose: this.dailyInsulinDose,
			intakeCarbs: this.intakeCarbs,
			carbRatio: this.carbRatio,
			mealBolus: this.mealBolus,
			currentGlucose: this.currentGlucose,
			targetGlucose: Number(this.targetGlucose),
			sensitivityFactor: this.sensitivityFactor,
			correctionBolus: this.correctionBolus,
			totalDosage: this.mealBolus + this.correctionBolus
		};
		if (emit) this.valuesChange.emit(output);
	}
}
