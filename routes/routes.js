import express from "express";
import {register,login} from "../controller/auth-controller.js";
import {createContent,getContent} from "../controller/content-controller.js";
import {getAnalytics} from "../controller/analytics-controller.js";
import {getDashboard} from "../controller/dashboard-controller.js";
import {createLead,getLeads} from "../controller/lead-controller.js";
import {createSale,getSales} from "../controller/sales-controller.js";
import {updateSettings,getSettings} from "../controller/setting-controller.js";
import protect from "../middlewares/auth-middleware.js"
 const router = express.Router();
 router.post("/register", register);
router.post("/login", login);
router.post("/createContent",protect, createContent);
router.post("/createLead",protect, createLead);
router.post("/createSale", protect,createSale);
router.post("/updateSettings",protect, updateSettings);
router.get("/getDashboard",protect, getDashboard);
router.get("/getAnalytics",protect, getAnalytics);
router.get("/getcontent",protect, getContent);
router.get("/getSales",protect, getSales);
router.get("/getSettings",protect, getSettings);
router.get("/getleads",protect, getLeads);
export default  router;


