![2023-06-28_05h53_39](https://github.com/abdellahsany/Kasa/assets/106497263/25b882a2-a7ee-48a6-9374-bcd3166f734f)

Develop a new web platform for a company called Kasa, which has been in the business of renting apartments for almost 10 years now.
With more than 500 ads posted every day, Kasa is one of the leaders in apartment rentals in France.

[![HTML](https://img.shields.io/badge/HTML-HyperText%20Markup%20Language-orange)](https://developer.mozilla.org/fr/docs/Learn/HTML)
[![CSS](https://img.shields.io/badge/CSS-Cascading%20Style%20Sheets-blue)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JS-JavaScript-yellow)](https://www.javascript.com/)
[![React](https://img.shields.io/badge/React-18.2.0-9cf)](https://fr.reactjs.org/)
[![React router](https://img.shields.io/badge/React%20Router-v6.2.2-orange)](https://v5.reactrouter.com/web/guides/quick-start)
[![React icons](https://img.shields.io/badge/React%20Icons-4.4.0-green)](https://react-icons.github.io/react-icons/)

## Logo

![Logo](src/images/logo.png)

## Project goal

- Start the React project and develop the entire application, React components, React Router routes, following the mockups (responsive!).
- Back-end / data: Use the 20 housing listings in the JSON file to build the corresponding Front-end.

## Technical constraints

#### React

It is essential to use these elements of React for quality code:

- Breakdown into re-usable, module-based components.
- One component per file.
- Logical structure of different files.
- Use of props between components.
- Use of state in components if necessary.
- Event management.
- Lists: React allows you to do some really interesting things with lists, by iterating on them, for example with map. You should use them as much as possible.
- It is also recommended, but not required, to use functional components rather than class components.

#### React Router

- Route parameters are handled by React Router in the URL to retrieve information for each housing.
- There is one page per route.
- The 404 page is returned for each non-existent route, or if a value present in the URL is not part of the data entered.
- The router logic is gathered in a single file.

## Functional constraints

- For the photos in the gallery (Gallery component): If the user is at the first image and clicks on "previous image", the gallery displays the last image.
- Conversely, when the displayed image is the last one in the gallery, if the user clicks on "next image", the gallery displays the first image.
- If there is only one image, the "next" and "previous" buttons do not appear.
- The gallery must always remain at the same height as indicated on the mockup. The images will therefore be collapsed and centered in the image field.
- Collapse: By default, collapses are closed when the page is initialized.
- If the Collapse is open, the user's click allows to close it.
- Conversely, if the Collapse is closed, the user can click to open it.

## Mockup

![mockup1](src/images/mockup1.png)
![mockup2](src/images/mockup2.png)
![mockup3](src/images/mockup3.png)
