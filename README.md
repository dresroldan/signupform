# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  <!-- - [Continued development](#continued-development) -->
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./images/screenshot.png)


### Links

<!-- - Solution URL: [Add solution URL here](https://your-solution-url.com) -->
- Live Site URL: [https://dresroldan.github.io/signupform/](https://dresroldan.github.io/signupform/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript 


### What I learned


```css
:root {
  --red: hsl(0, 100%, 74%);
  --green: hsl(154, 59%, 51%);
  --blue: hsl(248, 32%, 49%);
  --darkBlue: hsl(249, 10%, 26%);
  --grayBlue: hsl(246, 25%, 77%);
  --border-radius: 7px;
  --box-shadow: 0 6px rgba(0, 0, 0, 0.2);
  --font-weight: 600;
}
```
A custom property is most commonly thought of as a variable in CSS. They help follow the DRY programming principle. 


<!-- ### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect. -->


### Useful resources

- [Javascript Form Validation](https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/) - This helped me understand form validation using Javascript. HTML5 has built in validation features but isn't as customizable as Javascript validation. 

## Author

- Website - [Andrés Roldán](https://www.andresroldan.com)
- Frontend Mentor - [@dresroldan](https://www.frontendmentor.io/profile/dresroldan)
