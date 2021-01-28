# @vicentecalfo/ngx-insulin-calculator
This Angular component was created to show you how to calculate insulin dose with as little effort as possible.

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
Class name | Objective 
---|---
ic-calculator |   Wraps the entire component.
ic-step | Represents a section of the calculator.
ic-title | Section title.
ic-field | Represents the entire row of a calculator field.
ic-label | Field label.
ic-input | Input field.
ic-measure | Unit of measure field.
round-top | Rounds the top corners.
round-bottom | Round the bottom corners.

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

