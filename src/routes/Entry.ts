import {
  DeleteallEntry,
  deletesingleEntry,
  favouriteHandler,
  getAllEntries,
  getallfavourites,
  getSingleEntry,
} from "./../controllers/EntryController/EntryController";
import express from "express";
import { CreateEntry } from "../controllers/EntryController/EntryController";

const EntryRouter = express.Router();

EntryRouter.post("/new", CreateEntry);
EntryRouter.get("/favourites", getallfavourites);
EntryRouter.delete('/delete/entries',DeleteallEntry)
EntryRouter.get("/history", getAllEntries);
EntryRouter.get("/history/:id", getSingleEntry);
EntryRouter.delete("/:id", deletesingleEntry);
EntryRouter.patch("/:id/favourite", favouriteHandler);


export default EntryRouter;
