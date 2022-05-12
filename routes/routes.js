import express from "express";
const router = express.Router();

import HomeController from "../controllers/home";
import RegisterController from "../controllers/register";
import SecretController from "../controllers/secret";
import LoginController from "../controllers/login";
import AuthController from "../controllers/auth";
import AllController from "../controllers/all";
import StatsController from "../controllers/stats";

router.get("/", HomeController );

router.get("/secret/:term?", SecretController );
router.get("/all", AllController );

router.get("/stats", StatsController.Count);

router.get("/login", LoginController );
router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);

router.get("/register", RegisterController );
router.post("/register", AuthController.register);



export default router;