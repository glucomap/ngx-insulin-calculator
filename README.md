# @vicentecalfo/ngx-insulin-calculator
This Angular component was created to show you how to calculate insulin dose with as little effort as possible.
**This tool can never replace a professional medical advice. **

## Installation
First you need to install the npm module.
```
npm install @vicentecalfo/ngx-insulin-calculator
```

## Usage
### 1. Import the module
```javascript
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsulinCalculatorModule } from '@vicentecalfo/ngx-insulin-calculator';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InsulinCalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
### 2. Use the component
```html
<insulin-calculator></insulin-calculator>
```
### 3. Change Styles
```scss
::ng-deep.ic-calculator {
	width: 450px;
    font-family: 'Raleway', sans-serif;
    display: block;
    margin:0 auto;
    .ic-title{
      font-weight: 900;
    }
  }
```
#### 3.1 HTML Class anatomy
Class name | Description 
---|---
ic-calculator |   Wraps the entire component.
ic-step | Represents a section of the calculator.
ic-title | Section title.
ic-field | Represents the entire row of a calculator field.
ic-label | Field label.
ic-input | Input field.
ic-measure | Unit of measure field.
round-top | Round the top corners.
round-bottom | Round the bottom corners.

**HTML markup structure.**

```html
<div class="ic-calculator round-top round-bottom">
  <div class="ic-step">
    <span class="ic-title round-top">
      Sensitivy factor 
    </span>
    <div class="ic-field">
      <div class="ic-label">
        Total daily insulin dose 
      </div>
      <div class="ic-input">
        <input type="number" min="0" value="18"/>
      </div>
      <div class="ic-measure">
        units
      </div>
    </div>
      <!-- others fields --->
  </div>
    <!-- others steps --->
</div>
```
### 4. API reference
#### 4.1 Properties
Name | Description | Default value
---|---|---
`@Input() targetGlucose: number` | Target blood glucose in mg/dL. | 100
`@Input() sensitivityFactorConst: number` | Constant used for the calculation of insulin sensitivity factor. See ["Rule of 1800"](https://www.diabetesnet.com/diabetes-control/rules-control/correction-factor/). | 1800
`@Input() mealBolusConst: number` | Constant used for the calculation of the carbohydrate ratio. See ["Rule of 500"](https://diabeteson.com/carbohydrate-counting-rule-of-500-rule-rule-of-300-and-rule-of-100-for-insulin-dosing/). | 500
`@Input() labels` | JSON structure for i18n. | See [JSON structure](#jsoni18n).
`@Output() valuesChange: InsulinCalculatorOutput`| Event emitted for each value changed in the calculator fields with all updated values. | See [output structure](#jsonoutput).

**JSON structure for i18n.**
<a name="jsoni18n"></a>
```javascript
{
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
}
```

**Output structure.**
<a name="jsonoutput"></a>
```javascript
{
	dailyInsulinDose: 18,
	intakeCarbs: 60,
	carbRatio: 28,
	mealBolus: 2,
	currentGlucose: 120,
	targetGlucose: 100,
	sensitivityFactor: 100,
	correctionBolus: 0,
	totalDosage: 2
}
```

### 5. Calculator inputs

Field | Description
---|---
Total daily insulin dose | The daily dose of insulin is used to calculate the carbohydrate ratio and then calculate the correction bolus and meal bolus.
Intake carbohydrate | Total grams of carbohydrates to be eaten.
Carbohydrate ratio | This is how many grams of carbohydrates are covered by one unit of insulin.
Meal bolus | It is the amount of ultra-fast insulin needed to cover the grams of carbohydrates.
Current blood glucose | Your current blood glucose concentration in mg/dL.
Target blood glucose | Your target blood glucose concentration in mg/dL.
Insulin sensitivity factor | The insulin sensitivity factor tells you how many points, in mg/dL, your blood glucose will drop for each unit of insulin that you take. 

### 6. Notice
This tool can never replace a professional medical advice. 

