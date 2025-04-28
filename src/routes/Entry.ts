import { getSingleEntry } from './../controllers/EntryController/EntryController';
import { authMiddleware } from './../middlewares/isAuthenticated';
import express from "express";
import { CreateEntry } from "../controllers/EntryController/EntryController";


const EntryRouter = express.Router();

EntryRouter.post("/new", CreateEntry);
EntryRouter.get('/:id',getSingleEntry)
export default EntryRouter;
