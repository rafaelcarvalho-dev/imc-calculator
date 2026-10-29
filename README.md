# BMI Calculator (Calculadora de IMC)

A simple web app that calculates a user's Body Mass Index (BMI, or *IMC* in Portuguese) and returns a personalized message with their weight classification.

Built with plain HTML, CSS and JavaScript — no frameworks or dependencies.

## Features

- Personalized result using the user's name
- BMI calculation: `weight / height²`
- Classification based on the standard BMI ranges
- Validation: asks the user to fill in every field before calculating

## BMI classification

| BMI | Classification |
| --- | --- |
| Below 18.5 | Underweight |
| 18.5 – 24.9 | Ideal weight |
| 25 – 29.9 | Slightly overweight |
| 30 – 34.9 | Obesity grade I |
| 35 – 39.9 | Obesity grade II |
| 40 or above | Obesity grade III |

## How to use

1. Enter your **name**
2. Enter your **height in meters**, using a dot as the decimal separator (e.g. `1.75`)
3. Enter your **weight in kilograms** (e.g. `70`)
4. Click **Calcular**

Example output: `Rafael seu IMC é 22.9 e você está com peso ideal. PARABÉNS!`

> The interface and messages are in Brazilian Portuguese.

## Running locally

No build step is needed.

```bash
git clone https://github.com/rafaelcarvalho-dev/imc-calculator.git
cd imc-calculator
```

Then open `index.html` in your browser.

## Project structure

```
imc-calculator/
├── index.html
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        └── imc.js
```

## Technologies

- HTML5
- CSS3
- JavaScript (vanilla, DOM manipulation and event handling)

## What I practiced

- Selecting elements and reading form values with the DOM
- Handling the form `submit`/`click` event with `preventDefault()`
- Conditional logic (`if / else if`) and template literals
- Basic input validation

## Possible improvements

- Accept a comma as the decimal separator (`1,75`)
- Validate that height and weight are positive numbers
- Improve the visual design and add a responsive layout

## Author

**Rafael Carvalho** — [GitHub](https://github.com/rafaelcarvalho-dev) · [LinkedIn](https://www.linkedin.com/in/rafael-carvalho-95860a3b0/)
