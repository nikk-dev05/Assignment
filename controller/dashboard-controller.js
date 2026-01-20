export const getDashboard = async (req, res) => {
  try {
    res.json({ message: "Dashboard summary data" });
  } catch (error) {
    res.status(500).json({ message: "Failed to get dashboard", error: error.message });
  }
};
