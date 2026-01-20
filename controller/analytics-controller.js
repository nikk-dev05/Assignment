export const getAnalytics = async (req, res) => {
  try {
    res.json({ message: "Analytics data" });
  } catch (error) {
    res.status(500).json({ message: "Failed to get analytics", error: error.message });
  }
};
