
import dotenv from "dotenv";
dotenv.config();

export const ENV = {
    PORT:process.env.PORT||5000,
    JWT_SECRET_KEY:process.env.JWT_SECRET||'supersecretekey',
    GEMINI_API_KEY:process.env.GEMINI_API_KEY||'no api key '
}
