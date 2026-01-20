import Sale from "../models/sale.js";

export const createSale = async (req, res) => {
  try {
    const sale = await Sale.create(req.body);
    res.status(201).json(sale);
  } catch (error) {
    res.status(500).json({ message: "Failed to create sale", error: error.message });
  }
};

export const getSales = async (req, res) => {
  try {
    const sales = await Sale.find();
    res.json(sales);
  } catch (error) {
    res.status(500).json({ message: "Failed to get sales", error: error.message });
  }
};
