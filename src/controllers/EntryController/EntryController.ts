import { Request, Response, NextFunction } from "express";
import genAI from "../../config/Gemini";
import prisma from "../../config/db";
import { analyzeMoodWithGemini } from "../../Service/Analyze";

export const CreateEntry = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Invalid or missing text" });
    }

    const response = await analyzeMoodWithGemini(prompt);
    if (!response) {
      return res.status(401).json({ message: "No response from the API" });
    }

    const { title, moods, score } = response;

    // Ensure all required fields are provided
    if (
      !title ||
      !moods ||
      !Array.isArray(moods) ||
      moods.length === 0 ||
      score == null ||
      !req.user?.id
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const entry = await prisma.entry.create({
      data: {
        title,
        content: prompt,
        moods, // Store moods as an array
        score, // Store the single score
        userId: req.user.id,
      },
    });

    res.status(201).json({
      message: "Successfully created",
      result: entry,
    });
  } catch (error: any) {
    console.error("Error in CreateEntry:", error);
    res
      .status(500)
      .json({ errorMessage: error.message || "Internal server error" });
  }
};

export const getAllEntries = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const allEntry = await prisma.entry.findMany({
      where: { userId: req.user?.id },
      orderBy: { createdAt: "desc" },
    });
    if (!allEntry) {
      return res.status(401).json({ message: "no entry please add!" });
    }
    res
      .status(200)
      .json({
        message: "succuesfully fetched all entries",
        fullEntry: allEntry,
      });
  } catch (error) {
    console.error("Error in getSingleEntry:", error);
    res.status(500).json({ errorMessage: error || "Internal server error" });
  }
};

export const getSingleEntry = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(401).json({ message: "no id providede" });
    }
    const singleEntry = await prisma.entry.findUnique({
      where: { id },
    });
    if (!singleEntry) {
      return res
        .status(401)
        .json({ message: "No single entry found by this id" });
    }
    res
      .status(200)
      .json({
        message: "Succesfully fetched the single Entry",
        result: singleEntry,
      });
  } catch (error) {
    console.error("Error in getSingleEntry:", error);
    res.status(500).json({ errorMessage: error || "Internal server error" });
  }
};
