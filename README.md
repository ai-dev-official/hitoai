HitoAI website
Table of Contents

    Project Overview
    Features
    Tech Stack
    Installation
    Usage
    Folder Structure
    Key Techniques and Best Practices
    Environment Variables
    Scripts
    Testing
    Deployment
    Contributing
    Contact

Project Overview

    Description: This project is a React version of HitoAI website previously developed in Wordpress. 
    This React version has unique implementation that promotes usability and accessibility. 
    My motivation to build this application is to showcase my react skills as a requirement for my HitoAI internship application.

Features

    Main features:
        Responsive Design
        Dark/Light Mode Toggle
        State Management with Context API or Redux
        Authentication (JWT, OAuth) // Todo
        Email using emailjs
        Form Validation
        Lazy Loading and Code Splitting

Tech Stack

    Frontend: React, Vite, TailwindCSS (or any CSS framework), etc.
    Database: MongoDB // Todo
    Testing: Jest, React Testing Library, Cypress, etc.
    Deployment:  Netlify.
    Version Control: Git, GitHub


Installation
Prerequisites

    Node.js (version X.X.X)
    yarn

Steps

    Clone the repository:
    

git clone https://github.com/ai-dev-official/hitoai.git

Navigate to the project directory:



cd hitoai

Install dependencies:

    yarn install

Usage

    Development Server: How to run the app locally:

    npm run dev


Production Build: How to build the app for production:

    npm run build


Folder Structure

    Hitoai/
    context
    public
    assets/: Images, icons, fonts, etc.
    fonts
    images
    svg
    src/: Main application source code.
        components/: Reusable components.
            Booking
            Footer
            Header
            Hero
            Paragraph
            Particles
            Partners
            Products
            Search
            Simulator
            Team
            ToggleMode
        pages/: Page-level components.
        About
        Contact
        Home
        Login
        Register
        Products
        Services
        Updates
        context/: Context API files.
       
        styles/: Global CSS, SCSS files.
        // Todo
        utils/: Utility functions.
        // Todo
        services/: API service files.
        //Todo

Key Techniques and Best Practices

    1. Component Design

    Approach to Reusable and Modular Components:
        Components in the application are designed to be reusable and modular. Each component is built with a clear separation of concerns, focusing on a single responsibility.
        Reusable components are designed to be flexible, accepting props to customize their behavior and appearance. This reduces code duplication and increases maintainability.
        For example, a button component might be used across the app with different labels and styles based on the context, but the underlying logic and structure remain consistent.

    2. State Management

        Handling State in the Application:
            The application uses the Context API to manage global state, such as the current theme (dark/light mode). The ThemeContext is implemented to provide a consistent theme across the entire application.
            For local state management within components, the useState and useEffect hooks are used. This allows for managing state in a component-specific manner without overcomplicating the global state.

    3. Performance Optimization

        Techniques Used:
            Memoization: The React.memo function is utilized for components that only re-render when their props change. This helps to prevent unnecessary re-renders and improves performance, particularly for components that are rendered frequently.
            Code Splitting: Code splitting is implemented using React's lazy and Suspense to load components only when they are needed. This reduces the initial load time and improves the overall performance of the application.
            Lazy Loading: Certain components, especially those not immediately visible on the screen are lazy-loaded to reduce the initial load time.

    4. Error Handling

        Handling Errors and User Feedback:
            The application uses try-catch blocks and error boundaries to handle errors gracefully.
            Users are provided with clear and concise feedback in case of errors, ensuring they understand what went wrong and how they might proceed.
            For example, if there is an issue with form submission, the user is notified with an appropriate error message.

    5. Responsive Design

        Adapting to Different Screen Sizes:
            The application uses a combination of view width (vw) units and other CSS techniques to handle different screen sizes. However, note that responsive design hasn't been fully implemented yet.
            Basic responsive design principles are in place, but there is room for improvement to ensure the application provides an optimal user experience on all devices. 
            Mobile navigation has been implemented and fully functional

    6. Theming

        Implementing Dark/Light Modes:
            The ThemeContext is used to manage and toggle between dark and light modes throughout the application.
            The current theme is stored in the context and applied globally, allowing for a consistent look and feel across all components.
            Users can switch between themes, and the selected theme is preserved across sessions.

    7. Additional Features

        Search Implementation:
            A search component has been created to search through items in the application. This allows users to quickly find the content they are looking for.
        Login and Register Pages:
            The UI for login and register pages has been created, although the functionality is not yet fully implemented. These pages will handle user authentication and registration once completed.
        Contact Page:
            The contact page is implemented using EmailJS, allowing users to send messages directly from the application without requiring a backend. This simplifies communication between users and the site administrators.

Environment Variables

    List and explain any environment variables required by the application:

    env

    EMAILJS_SERVICE_ID=
    EMAILJS_TEMPLATE_ID=
    EMAILJS_PUBLIC_KEY=

Scripts

    start: Runs the app in development mode.
    build: Builds the app for production.
    test: Runs the test suite.
    lint: Runs ESLint to check for code quality issues.
    format: Runs Prettier to format the code.

Testing

    Unit Testing: Mention tools used, such as Jest. // TODO
    Integration Testing: Describe how integration tests are set up and executed. // TODO
    End-to-End Testing: If applicable, describe the E2E testing setup using tools like Cypress. // TODO

Deployment
    Netlify: https://hitoai.netlify.app/

Contributing

    Guidelines for contributing to the project.
        Fork the repository
        Create a new branch (git checkout -b feature/YourFeature)
        Commit your changes (git commit -m 'Add some feature')
        Push to the branch (git push origin feature/YourFeature)
        Open a pull request

License

    Specify the license under which the project is distributed.

Contact

    https://www.linkedin.com/in/azubuike-ibe/ * https://x.com/AI_Dev_official