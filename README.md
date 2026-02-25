# 🚀 Mongoose REST API Checkpoint

This project is a RESTful API built with **Node.js**, **Express**, and **Mongoose** to manage users.

## 📁 Folder Structure
- `config/.env`: Environment variables.
- `models/User.js`: User Schema and Model.
- `server.js`: Main server configuration and routes.

## 🛠️ API Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/users` | Returns all users from the DB |
| **POST** | `/users` | Adds a new user |
| **PUT** | `/users/:id` | Edits a user by their ID |
| **DELETE** | `/users/:id` | Removes a user by their ID |

## 🚦 Instructions
1. Run `npm install` to install dependencies.
2. Ensure your `MONGO_URI` is correct in `config/.env`.
3. Run `node server.js` to start the server.
4. Test endpoints using **Postman**.