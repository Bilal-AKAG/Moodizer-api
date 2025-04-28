
import { getAllEntries, getSingleEntry } from './../controllers/EntryController/EntryController';
import express from "express";
import { CreateEntry } from "../controllers/EntryController/EntryController";


const EntryRouter = express.Router();

EntryRouter.post("/new", CreateEntry);
EntryRouter.get('/:id',getSingleEntry);
EntryRouter.get('/',getAllEntries);
export default EntryRouter;
