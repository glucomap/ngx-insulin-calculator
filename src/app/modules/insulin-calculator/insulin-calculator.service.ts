import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class InsulinCalculatorService {
	constructor() {}

	sensitivityFactorCalc(dailyInsulineDose: number, constant = 1800): number {
		const sensitivityFactor = dailyInsulineDose <= 0 ? 0 : constant / dailyInsulineDose;
		return Math.round(sensitivityFactor);
	}

	correctionBolusCalc(currentGlucose: number, targetGlucose: number, sensitivityFactor: number): number {
		const glucoseDifference = currentGlucose - targetGlucose;
		const correctionBolus = glucoseDifference / sensitivityFactor;
		return Math.round(correctionBolus);
	}

	mealBolusCalc(
		intakeCarbs: number,
		dailyInsulineDose: number,
		constant = 500
	): {
		[key: string]: number;
	} {
		const carbCoveragePerUnit = Math.round(constant / dailyInsulineDose);
		const mealBolus = Math.round(intakeCarbs / carbCoveragePerUnit);
		return {
			carbCoveragePerUnit,
			mealBolus
		};
	}

	mealBolusDefaultCalc(
		intakeCarbs: number,
		defaultCarbCoverage = 15
	): {
		[key: string]: number;
	} {
		const mealBolus = Math.round(intakeCarbs / defaultCarbCoverage);
		return {
			carbCoveragePerUnit: defaultCarbCoverage,
			mealBolus
		};
	}

	dailyInsulinDoseByWeightCalc(weight: number, constant = 0.55): number {
		const dailyDose = constant * weight;
		return Math.round(dailyDose);
	}

	convertMgdlToMmoll(mgdlValue: number, constant = 18): number {
		return Number((mgdlValue / constant).toFixed(1));
	}

	convertMmollToMgdl(mmollValue: number, constant = 18): number {
		return Math.round(mmollValue * constant);
	}
}
