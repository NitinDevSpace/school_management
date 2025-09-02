# School Management Mini-Project

## Overview

This project is a simple school management application built with Next.js. It allows users to add new schools and view a list of existing schools.

## Live Demo

Check out the live demo of the project [here](https://nitin-school-management.vercel.app/).

## Project Structure

```
src/
  app/
    add_school/        # Page to add a new school
    show_schools/      # Page to display all schools
    api/               # API routes for handling data operations
src/lib/
  db.js                # Database connection and queries
public/schoolImages/        # Uploaded school images
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd school-management
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   Note: This project uses `mysql2` package and does not require `multer`.
3. Create a `.env.local` file in the root directory and add your database credentials:
   ```
   DB_HOST=your_db_host
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=schoolDB
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Database Setup

Create a MySQL or TiDB database named `schoolDB` and a `schools` table with the following schema:

```sql
CREATE DATABASE IF NOT EXISTS schoolDB;

USE schoolDB;

CREATE TABLE IF NOT EXISTS schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  contact VARCHAR(20) NOT NULL,
  email_id VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
