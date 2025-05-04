# 🎉 Simple Event Management API

A basic RESTful API built with TypeScript, Node.js, and MongoDB that allows users to create, view, update, and delete events.

---

## 🚀 Features

- Create new events
- View all events
- View a single event by ID
- Update an existing event
- Delete an event
- Validates date fields (must be valid and not in the past)

---

## 🛠️ Tech Used

- **TypeScript**
- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **Dotenv** – For environment variable management
- **Postman** – For API documentation and testing

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   https://github.com/Adnansulaiman/simple_event_management_api.git
   cd simple_event_management


2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Create a `.env` file** in the root directory:
    ```ini
    MONGODB_URI=mongodb://localhost:27017/eventdb
    PORT=5000
    ```

4. **Run the application**
    - In development (with hot reloading):
        ```bash
        npm run dev
        ```
    - In production:
        ```bash
        npm run build
        npm start
        ```

---

## 📬 API Endpoints

| Method | Endpoint       | Description          |
|--------|----------------|----------------------|
| POST   | `/events`      | Create a new event   |
| GET    | `/events`      | List all events      |
| GET    | `/events/:id`  | Get a specific event |
| PUT    | `/events/:id`  | Update an event      |
| DELETE | `/events/:id`  | Delete an event      |

---

### 📝 Request Body Example (for POST & PUT)

```json
{
  "title": "Event Title",
  "description": "Event Description",
  "date": "2025-06-01"
}
```
## 📄 Postman Documentation

You can test all the API endpoints using Postman.

- **Public Documentation URL**: [Click here to view full API documentation](https://api.postman.com/collections/31710322-809a95b5-2f99-4abd-9729-9502b6f0bd3e?access_key=PMAT-01JTE1BDVWCJA4JBBM7KMQHVSG)
- **Manual Import**:
  1. Open Postman
  2. Click **Import**
  3. Upload the `postman_collection.json` file included in this repo

> The Postman collection includes all endpoints with example request bodies and responses.
> 
---

## 📁 Project Structure
```bash
event-management-api/
├── src/
│ ├── controllers/ # Request handlers
│ ├── models/ # Mongoose models
│ ├── routes/ # Route definitions
│ ├── middlewares/ # Middleware functions (e.g., error handler)
│ ├── config/ # MongoDB config
│ ├── app.ts # Express setup
│ └── server.ts # Entry point
├── .env # Environment variables
├── .gitignore # Ignored files
├── README.md # Project documentation
├── package.json # Scripts and dependencies
├── tsconfig.json # TypeScript config
└── postman_collection.json # API testing collection
```
---

## 📌 Notes

- Make sure MongoDB is running locally or use a cloud service like MongoDB Atlas.
- Date must not be in the past.
