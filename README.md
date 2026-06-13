A foundational React application built to explore and demonstrate how different JavaScript data types are rendered inside JSX. The project also showcases basic runtime conditional logic within a functional component.

## Features

- **Dynamic String Reassignment:** Uses `Math.random()` to dynamically alter the main heading text on page load.
- **JSX Data Rendering:** Demonstrates the proper rules for rendering various data types:
  - **Strings & Numbers:** Directly embedded within JSX.
  - **Booleans:** Rendered visually using standard JavaScript ternary conditions.
  - **Arrays:** Dynamically mapped into a clean HTML unordered list structure using `.map()`.
  - **Objects:** Deconstructed safely by targeting individual key properties to prevent application rendering crashes.

## Installation & Local Setup
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.
1. **Clone the repository:**
2. Navigate into the project folder:
   cd variable-display
4. Install the project dependencies:
   npm install
5. Start the local development server:
   npm start
