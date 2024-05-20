# Basic user Calendar System with Google Calendar Integration

## Overview

This Assignment is a Basic Calendar System that allows users to manage their schedules and integrates with Google Calendar. The system includes features for viewing, creating, updating, and deleting events. It is a  API integrations, creating intuitive user interfaces, and developing backend functionalities.

## Features

### Basic Calendar Management


  
- **Event Creation**: A form that opens in a pop-up for users to create events with the following fields:
  - Event title
  - Description
  - Date (dd-mm-yyyy)
  - Time (12hr format)
  - Duration in hours
  - Session Notes

- **Validation**: The form includes validation for manadatory fields and proper data formats.


## Tech Stack

### Backend

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing event data.
- **dotenv**: Module to load environment variables.

### Frontend

- **React.js**: JavaScript library for building user interfaces.
- **FullCalendar**: JavaScript calendar library for creating interactive calendars.

## Project Setup

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- Google Cloud Project with Calendar API enabled
- Google OAuth 2.0 credentials (Client ID and Client Secret)

### Backend Setup

1. Clone the repository:
   ``` bash
   git clone https://github.com/your-username/evallo-assignment.git
   cd evallo-assignment
  ``
  
2. Navigate to the backend directory:
   `` bash
      cd backend
   ``

3. Install dependencies::
   `` bash
      npm install
   ``
   
4. Create a .env file and add the following environment variables:
  `` bash
      PORT=8080
      MONGO_URI=your_mongodb_uri
      GOOGLE_CLIENT_ID=your_google_client_id
      GOOGLE_CLIENT_SECRET=your_google_client_secret
      GOOGLE_REDIRECT_URI=your_redirect_uri
   ``
5. Start the backend server:
    `` bash
      npm run start
   ``
   
### Frontend Setup

1. Navigate to the frontend directory:
  ``
  cd frontend
  Install dependencies:
  ``

2. Navigate to the backend directory:
   `` bash
      cd backend
   ``
   
3. Install dependencies::
   `` bash
      npm install
   ``

4. Start the backend server:
    `` bash
      npm start
   ``
### API Endpoints
## Event Endpoints
1. Create Event: POST /auth/events
2. Get Events: GET /auth/events
3. Update Event: PUT /auth/events/:id
4. Delete Event: DELETE /auth/events/:id

### Deployed Link
- https://jolly-jalebi-7f8fa6.netlify.app/


### Usage
- Navigate to the frontend application in your browser at http://localhost:3000.
- Use the interactive calendar to view, create, update, and delete events.
