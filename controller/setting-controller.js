import Settings from "../models/setting.js";

export const updateSettings = async (req, res) => {
  try {
    const { userId, preferences } = req.body;
    const settings = await Settings.findOneAndUpdate(
      { userId },
      { preferences },
      { new: true, upsert: true }
    );
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: "Failed to update settings", error: error.message });
  }
};

export const getSettings = async (req, res) => {
  try {
    const settings = await Settings.find();
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: "Failed to get settings", error: error.message });
  }
};
