# Lola's Home B&B Website

Welcome to the **Lola's Home B&B Website** project! This web application allows users to explore rooms, book their stay, and manage their reservations at Lola's Bed & Breakfast. It leverages a modern stack, including **React**, **Next.js**, **TypeScript**, **Tailwind CSS**, **MongoDB**, and **Prisma**. 

This project also served as a learning experience for me, as I worked on improving my skills in modern web technologies after some time away from personal projects.

## Table of Contents

- [Lola's Home B\&B Website](#lolas-home-bb-website)
  - [Table of Contents](#table-of-contents)
  - [About the Project](#about-the-project)
  - [Tech Stack](#tech-stack)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Project](#running-the-project)
  - [My Learning Journey](#my-learning-journey)
    - [Challenges Faced](#challenges-faced)
  - [Future Improvements](#future-improvements)
  - [Contributing](#contributing)
  - [License](#license)

## About the Project

**Lola's Home B&B Website** is a full-stack web application designed for a Bed & Breakfast business. It allows users to browse available rooms, check availability, and book a stay. Guests can also manage their bookings through a secure login system.

This project represents both a functional application and a key learning experience for me. It’s the first time I've used technologies like **React with TypeScript**, **Tailwind CSS**, **MongoDB with Prisma**, and **React Routers**. I had prior experience with React and MongoDB in a project called **Lola's Boutique**, but this project helped me deepen my understanding and explore new tools.

## Tech Stack

This project uses the following technologies:

- **React**: A JavaScript library for building dynamic user interfaces.
- **Next.js**: A framework built on React that supports server-side rendering and static site generation.
- **TypeScript**: A typed superset of JavaScript that improves code quality and maintainability.
- **Tailwind CSS**: A utility-first CSS framework for quickly styling the application.
- **MongoDB**: A NoSQL database used to store room details, booking information, and user data.
- **Prisma**: A modern ORM that simplifies data access with MongoDB.
- **React Router**: A library for managing navigation and routing in React applications.

## Features

- **Room Listings**: Users can view a list of available rooms with pricing and details.
- **Booking System**: A secure form that allows guests to book their stay.
- **User Authentication**: Guests can register, log in, and manage their bookings.
- **Dynamic Room Availability**: Displays real-time room availability.
- **Responsive Design**: The site is optimized for desktop and mobile devices using Tailwind CSS.

## Getting Started

### Prerequisites

To run this project locally, you need to have the following installed:

- Node.js (>= 14.x.x)
- MongoDB instance (local or cloud, such as MongoDB Atlas)
- npm or yarn as your package manager
- Prisma CLI

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/lolas-home-bnb.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd lolas-home-bnb
    ```

3. **Install dependencies**:
    Using npm:
    ```bash
    npm install
    ```
    or using yarn:
    ```bash
    yarn install
    ```

4. **Set up environment variables**:
    Create a `.env` file in the root of your project and add the following variables (replace with your actual values):
    ```
    DATABASE_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/myDatabase"
    NEXTAUTH_SECRET=<your-next-auth-secret>
    ```

5. **Set up Prisma**:
    Run the following Prisma commands to generate the client:
    ```bash
    npx prisma generate
    ```

    Then, push your Prisma schema to MongoDB:
    ```bash
    npx prisma db push
    ```

### Running the Project

1. **Start the development server**:
    ```bash
    npm run dev
    ```
    or using yarn:
    ```bash
    yarn dev
    ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## My Learning Journey

This project was a significant step in my journey of relearning and upskilling as a developer. I had basic knowledge of React from previous projects, and I’ve used MongoDB in the past (e.g., in **Lola's Boutique**), but this was my first time working with the following tools:

- **TypeScript**: Switching to TypeScript in React has been a game-changer. Initially, the strong typing system added complexity, but it provided better code maintainability and error checking, improving my overall confidence in my code.
  
- **Tailwind CSS**: This was my first experience using Tailwind, and I found it extremely efficient in styling components without writing much custom CSS. The utility-first approach sped up development and made the UI highly responsive.

- **React Routers**: Navigating between different pages in the app using React Router was a new concept for me. Learning how to set up dynamic routing with React and Next.js was challenging but rewarding.

- **Prisma with MongoDB**: I’ve worked with MongoDB before, but integrating it with Prisma’s ORM was a new and insightful experience. Prisma’s schema-driven approach made managing my database smoother and more structured.

### Challenges Faced

1. **TypeScript Integration**:
   TypeScript’s static type system added complexity, especially when working with third-party libraries like NextAuth and Prisma. I faced challenges in typing async functions, handling API responses, and managing component props.

2. **Setting up Prisma with MongoDB**:
   Understanding Prisma’s data modeling approach and mapping it to MongoDB's document structure took some effort. Prisma’s schema files are incredibly powerful but were initially tricky to set up.

3. **React Routers**:
   Managing multiple routes and dynamic pages was new to me. Integrating these with Next.js server-side rendering was another challenge, but it gave me a deeper understanding of React’s component-based architecture.

4. **Tailwind CSS**:
   While Tailwind simplified styling, getting used to its utility-first approach required a mindset shift. However, once I got the hang of it, it drastically improved my development speed.

## Future Improvements

- **Enhanced User Interface**: I plan to polish the design further and add more interactivity to improve the user experience.
- **Test Coverage**: I aim to introduce unit and integration tests to ensure the stability of the app.
- **Real-Time Updates**: Adding real-time room availability using websockets or other technologies could improve the booking experience.
- **Admin Dashboard**: I plan to add an admin section where staff can manage room availability and bookings directly.

## Contributing

Contributions, suggestions, and feedback are welcome! If you find any issues or have ideas for improvement, please feel free to open an [issue](https://github.com/your-username/lolas-home-bnb/issues) or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for more details.
