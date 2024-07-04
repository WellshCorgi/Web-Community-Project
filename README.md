# Web-Community-Project
This toy project aims to develop a web community service using Django with PostgreSQL for the backend and React for the frontend.

## Overview

This is a toy project aimed at building a web community service using Django for the backend, PostgreSQL for the database, and React for the frontend. The project serves as a learning exercise to explore full-stack web development and implement a basic community platform with features like user authentication, posts, and comments.

## Features

- **User Authentication:** Sign up, log in, and manage user accounts.
- **Post Creation and Management:** Users can create, edit, and delete posts.
- **Comment System:** Users can comment on posts.
- **Responsive Design:** Frontend is built with React to ensure a modern and responsive user interface.
- **Database Integration:** PostgreSQL is used for managing application data.

## Technologies Used

- **Backend:** Django
- **Database:** PostgreSQL
- **Frontend:** React
- **API Documentation:** Swagger

## Installation

To get started with this project, follow the instructions below to set up the development environment.

### Prerequisites

Make sure you have the following installed on your system:

- [Python 3.x](https://www.python.org/downloads/)
- [Node.js and npm](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/download/)

### Clone the Repository

```bash
git clone https://github.com/WellshCorgi/Web-Community-Project.git

cd Web-Community-Project
```

## Set Up the Backend

```bash
python -m venv venv

source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

pip install -r requirements.txt
```

### Apply database migrations & Run server
```bash
python manage.py migrate

python manage.py createsuperuser

python manage.py runserver

```

## Set Up the Frontend
### Navigate to the frontend directory:
```bash
cd frontend
Install the required Node.js packages:
```
### Install the required Node.js packages:
```bash
npm install
Run the development server:
```
### Run the development server:
```bash
npm start
```
The frontend will be available at http://localhost:3000.

## Usage

Once both the backend and frontend servers are running, follow these instructions to use the web community service:

1. **Access the Web Application:**

   - **Frontend:** Open your browser and navigate to `http://localhost:3000` to view the React frontend of the community service.
   - **Backend API:** Access the API endpoints at `http://localhost:8000/api/`. You can use tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/) to interact with the API.

2. **Swagger API Documentation:**

   - **Swagger UI:** Visit `http://localhost:8000/api/docs/` to explore and test API endpoints using Swagger. Swagger provides an interactive documentation for all available API endpoints, including request/response examples and authentication details.

3. **Admin Panel (Optional):**

   - **Admin Panel:** If you created a superuser, you can access the Django admin panel at `http://localhost:8000/admin` to manage users, posts, comments, and other data.

4. **Frontend Features:**

   - **User Registration:** Navigate to the registration page to create a new user account.
   - **Login/Logout:** Users can log in to their accounts and log out from the application.
   - **Create Posts:** Logged-in users can create new posts from the main feed page.
   - **Edit/Delete Posts:** Users can edit or delete their own posts.
   - **Comment on Posts:** Users can comment on posts and view comments from other users.
   - **View Posts:** Users can browse through posts and view details including comments.

5. **API Endpoints:**

   - **Registration:** `POST /api/register/`
   - **Login:** `POST /api/login/`
   - **Get All Posts:** `GET /api/posts/`
   - **Create Post:** `POST /api/posts/`
   - **Get Single Post:** `GET /api/posts/{id}/`
   - **Update Post:** `PUT /api/posts/{id}/`
   - **Delete Post:** `DELETE /api/posts/{id}/`
   - **Create Comment:** `POST /api/posts/{id}/comments/`
   - **Get Comments for a Post:** `GET /api/posts/{id}/comments/`

   For a detailed list of all API endpoints and their specifications, refer to the [Swagger API Documentation](http://localhost:8000/api/docs/).

## Future Enhancements

We have several exciting features and improvements planned for future versions of the Web Community Service. Here are some of the key features we aim to implement:

- **Login and User Authentication Enhancements:**
  - Improve the login process for better security and user experience.
  - Implement features for password recovery and account verification.
  - Explore additional authentication methods such as OAuth for third-party logins.

- **User Profile Page (My Page):**
  - Develop a personalized user profile page where users can view and edit their account details.
  - Add functionalities for users to manage their posts, view their comment history, and update their profile information.

- **User Profile Management:**
  - Enable users to update their profile picture, bio, and other personal details.
  - Provide options for users to manage their account settings and privacy preferences.

- **Notifications System:**
  - Introduce a notification system to alert users about comments, replies, and other activities related to their posts.
  - Implement real-time notifications and email alerts for significant events.

- **Search Functionality:**
  - Add search capabilities to allow users to find posts and comments based on keywords, tags, or categories.
  - Enhance the search experience with filters and sorting options for better results.
