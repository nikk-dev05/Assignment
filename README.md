# Dashboard Backend API

A modular backend API built using **Node.js (Express)** and **MongoDB** for a dashboard system.  
The project includes multiple modules like Dashboard, Analytics, Leads, Sales, Content, and Settings with JWT-based authentication.

---

## Tech Stack
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- JWT Authentication
- Mongoose
- dotenv

---

## Project Structure
src/
│── controllers/
│ ├── auth.controller.js
│ ├── dashboard.controller.js
│ ├── analytics.controller.js
│ ├── leads.controller.js
│ ├── sales.controller.js
│ ├── content.controller.js
│ └── settings.controller.js
│
│── routes/
│ ├── auth.routes.js
│ ├── dashboard.routes.js
│ ├── analytics.routes.js
│ ├── leads.routes.js
│ ├── sales.routes.js
│ ├── content.routes.js
│ └── settings.routes.js
│
│── middleware/
│ └── auth-middleware.js
│
│── utils/
│ └── db.js
│
│── models/
│ ├── User.js
│ ├── Lead.js
│ ├── Sale.js
│ └── Content.js
│
│── index.js


---


---

##  API Routes

### Auth
- `POST /api/register`
- `POST /api/login`

### Dashboard (Protected)
- `GET /api/dashboard`

### Analytics (Protected)
- `GET /api/analytics`

### Leads (Protected)
- `GET /api/leads`
- `POST /api/leads`

### Sales (Protected)
- `GET /api/sales`
- `POST /api/sales`

### Content (Protected)
- `GET /api/content`
- `POST /api/content`

### Settings (Protected)
- `GET /api/settings`
- `PUT /api/settings`

---

## ⚙️ Environment Variables
Create a `.env` file (or configure on Render):



## Authentication
- JWT-based authentication
- Login generates a token
- Protected routes use `auth-middleware.js`
- Token passed in header:

  
---

##  Environment Variables
Create a `.env` file (or configure on Render):


---

##  Run Locally
```bash
npm install
npm start
````
---
## Deployed URL
https://backend-server-q22n.onrender.com





