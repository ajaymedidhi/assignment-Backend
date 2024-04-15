# Travel Diary Platform Backend Development

## Objective:
The objective of this project is to develop a backend API for a Travel Diary Platform. The API will allow users to perform CRUD (Create, Read, Update, Delete) operations on travel diary entries. The project aims to showcase skills in building a RESTful API using Node.js, Express.js, and integrating Object-Oriented Programming (OOP) concepts.

## Technology Stack:
- Node.js
- Express.js
- Database system of choice with sample data

## Models:
### User Class:
This class represents the users of the platform. It includes methods for user authentication, profile management, and interactions with travel diary entries.

### Diary Entry Class:
This class represents a travel diary entry. Each entry contains a title, description, date, location, and optional photos. CRUD methods are implemented for managing diary entries.

## Database Implementation:
- Select a suitable database and set up the necessary infrastructure.
- Design and implement schemas for User and Diary Entry models.
- Populate the database with sample data for demonstration purposes.

## Functionality:
### User Class Functionality:
- Implement methods for user registration, login, and profile management.
- Ensure validation and error handling for all user-related activities.
- Incorporate authentication methods like JWT for secure access.

### Diary Entry Class Functionality:
- Develop methods for CRUD operations on diary entries.
- Ensure validation and error handling for diary entry operations.
- Use encapsulation principles for database interactions within class methods.

### Additional Routes Functionality:
- Design routes for user registration, login, and profile management.
- Implement routes for CRUD operations on diary entries.
- Use middleware for authentication to secure the API.

## Use Cases for Endpoints:
### User Endpoints:
1. **User Registration**
   - A new user signs up for the platform by providing a username, email, and password.
   - Endpoint: `POST /api/users/register`
   - Request Body: `{ "username": "example_user", "email": "user@example.com", "password": "password123" }`

2. **User Login**
   - An existing user logs in to the platform using their email and password.
   - Endpoint: `POST /api/users/login`
   - Request Body: `{ "email": "user@example.com", "password": "password123" }`

3. **User Profile Retrieval**
   - An authenticated user retrieves their profile information.
   - Endpoint: `GET /api/users/profile`
   - Authorization Header: `Bearer <JWT_Access_Token>`

### Diary Entry Endpoints:
1. **Create Diary Entry**
   - A user creates a new diary entry with a title, description, date, location, and optional photos.
   - Endpoint: `POST /api/diary-entries`
   - Authorization Header: `Bearer <JWT_Access_Token>`
   - Request Body: `{ "title": "Trip to Paris", "description": "Visited the Eiffel Tower and Louvre Museum", "date": "2024-04-15", "location": "Paris, France", "photos": ["photo1.jpg", "photo2.jpg"] }`

2. **Get Diary Entry**
   - A user retrieves a specific diary entry by its ID.
   - Endpoint: `GET /api/diary-entries/:id`
   - Authorization Header: `Bearer <JWT_Access_Token>`

3. **Update Diary Entry**
   - A user updates an existing diary entry with new information.
   - Endpoint: `PUT /api/diary-entries/:id`
   - Authorization Header: `Bearer <JWT_Access_Token>`
   - Request Body: `{ "title": "Updated Title", "description": "Updated description" }`

4. **Delete Diary Entry**
   - A user deletes a specific diary entry.
   - Endpoint: `DELETE /api/diary-entries/:id`
   - Authorization Header: `Bearer <JWT_Access_Token>`

These use cases demonstrate how users can interact with the Travel Diary Platform through various API endpoints to perform actions such as user registration, login, profile management, and CRUD operations on diary entries.
