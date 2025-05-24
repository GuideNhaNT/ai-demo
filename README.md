\

# Pizza Ordering App - React + TypeScript + Vite

This project is a Pizza Ordering application built with React, TypeScript, and Vite, based on a Figma design. It features an Atomic Design structure and aims to provide a responsive user experience for browsing categories and products.

## Project Overview

The application allows users to:

- View different categories of food items (Pizza, Sides, Desserts, Drinks).
- Browse products within those categories.
- (Future) Add products to a cart and proceed to checkout.

The UI is designed to be responsive, adapting to various screen sizes from mobile to desktop.

## Tech Stack

- **Framework/Library:** React
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Styled-components
- **Routing:** React Router v6 (to be implemented)
- **State Management:** Redux Toolkit (to be implemented)
- **Form Handling:** React Hook Form (to be implemented)
- **Linting/Formatting:** ESLint, Prettier
- **Pre-commit Hooks:** Husky, lint-staged

## Project Structure

The project follows an Atomic Design methodology for organizing components:

```
my-app/
├── public/
│   └── ... # Static assets
├── src/
│   ├── assets/
│   │   └── img/ # Images and icons
│   ├── components/
│   │   ├── atoms/      # Smallest, indivisible UI elements (Button, Icon, Text, Image)
│   │   ├── molecules/  # Groups of atoms forming simple components (CategoryCard, ProductCard, LocationDisplay)
│   │   ├── organisms/  # More complex components composed of molecules and/or atoms (Header, CategoryList, ProductList)
│   │   └── templates/  # Page-level layouts (to be developed)
│   ├── pages/        # Top-level page components (HomePage)
│   ├── App.tsx       # Main application component
│   ├── main.tsx      # Application entry point
│   └── ...           # Other configuration and type definition files
├── .eslintrc.json
├── .prettierrc.json
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Key Features Implemented

- **Vite Project Setup:** Initialized with `react-ts` template.
- **Dependency Installation:** Core libraries like `react-router-dom`, `@reduxjs/toolkit`, `react-hook-form`, `styled-components`, `eslint`, `prettier`, `husky` are installed.
- **ESLint & Prettier Configuration:** Setup for code linting and formatting.
- **Husky Pre-commit Hooks:** Configured to run linters before commits.
- **Atomic Design Folder Structure:** Created.
- **Figma Integration:**
  - UI components (atoms, molecules, organisms, pages) created based on the Figma design for a Pizza Ordering App.
  - Images and icons from Figma downloaded and placed in `src/assets/img/`.
- **Component Styling:** Components are styled using `styled-components`.
- **Basic Responsive Design:**
  - Product and Category lists wrap items to utilize screen width.
  - Cards adjust their size based on available space.

## Getting Started

### Prerequisites

- Node.js (v18.x or later recommended)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd my-app
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    # yarn install
    ```

### Running the Development Server

```bash
npm run dev
# or
# yarn dev
```

This will start the Vite development server, typically at `http://localhost:5173`.

### Building for Production

```bash
npm run build
# or
# yarn build
```

This command bundles the application into static files for production in the `dist` folder.

### Linting and Formatting

- To run ESLint:
  ```bash
  npm run lint
  ```
- To run Prettier and format files:
  ```bash
  npm run format
  ```
  (Note: A `format` script might need to be added to `package.json` if not already present, e.g., `"format": "prettier --write \\"src/**/*.{ts,tsx,json,css,md}\\""`)

## Figma Design Reference

The UI and component structure are based on a Figma design for a Pizza Ordering application. Key elements from the design, such as color schemes, typography, and layout, have been translated into React components.

_(You can add a link to the Figma file here if it's publicly accessible or relevant for contributors)_

## Future Enhancements (Pending Tasks)

1.  **Implement React Router v6:** For navigation between different pages/views.
2.  **Integrate Redux Toolkit:** For global state management (e.g., shopping cart, user authentication, selected filters).
3.  **Implement React Hook Form:** For handling forms (e.g., search, checkout process).
4.  **Refine Component Styles:** Ensure pixel-perfect matching with the Figma design and enhance interactivity.
5.  **Data Fetching:** Replace mock data with actual API calls for categories, products, etc.
6.  **Complex Icon Rendering:** Address rendering of multi-vector icons from Figma (e.g., by creating combined SVG components).
7.  **Advanced Responsive Behavior:** Continue to refine and test responsiveness across a wider range of devices and screen sizes.
8.  **Testing:** Implement unit and integration tests.
9.  **Accessibility (a11y):** Ensure the application is accessible.

---

This README was partially generated with AI assistance based on the project's progress and Figma design integration.
