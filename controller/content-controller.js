import Content from "../models/content.js";

export const createContent = async (req, res) => {
  try {
    const content = await Content.create(req.body);
    res.status(201).json(content);
  } catch (error) {
    res.status(500).json({ message: "Failed to create content", error: error.message });
  }
};

export const getContent = async (req, res) => {
  try {
    const content = await Content.find();
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: "Failed to get content", error: error.message });
  }
};
