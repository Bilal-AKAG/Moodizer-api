# Moodizer API

A modern RESTful API service for mood tracking and emotional well-being, built with Node.js, Express, and TypeScript.

## 🚀 Features

- **User Management**
  - User registration and authentication
  - Secure login system
  - User profile management
  - Protected user routes

- **Mood Tracking**
  - Create new mood entries
  - View all mood entries
  - Get detailed mood entry by ID
  - Delete individual mood entries
  - Bulk delete mood entries

- **Favorites System**
  - Mark mood entries as favorites
  - View all favorite entries
  - Toggle favorite status

- **Data Validation & Security**
  - Input validation using Zod schemas
  - JWT-based authentication
  - Protected API endpoints
  - Secure password handling

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** JWT
- **AI Integration:** Google Gemini API
- **Environment Management:** dotenv
- **Validation:** Zod

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL
- TypeScript

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Bilal-AKAG/moodizer-api.git
   cd moodizer-api
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory:
   ```env
   PORT=5000
   JWT_SECRET=your_jwt_secret_key
   GEMINI_API_KEY=your_gemini_api_key
   DATABASE_URL="postgresql://username:password@localhost:5432/moodizer?schema=public"
   ```

4. Set up the database:
   ```bash
   # Generate Prisma Client
   npx prisma generate
   
   # Run database migrations
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 📁 Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── helper/         # Helper functions
├── middlewares/    # Custom middlewares
├── routes/         # API routes
├── Service/        # Business logic
├── zodSchema/      # Zod validation schemas
├── prisma/         # Prisma schema and migrations
└── index.ts        # Application entry point
```

## 🔒 Security Features

- JWT-based authentication
- Protected routes using middleware
- Environment variable configuration
- CORS enabled for secure cross-origin requests
- Type-safe database operations with Prisma
- Input validation with Zod schemas

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

- **Name:** Bilal Ali
- **GitHub:** [@Bilal-AKAG](https://github.com/Bilal-AKAG)
- **Email:** bilal.ali.irp.dev@gmail.com

Feel free to reach out if you have any questions or suggestions!


