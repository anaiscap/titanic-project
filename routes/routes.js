import express from "express";
const router = express.Router();

import HomeController from "../controllers/home";
import ErrorController from "../controllers/404";
import RegisterController from "../controllers/register";
import SecretController from "../controllers/secret";
import LoginController from "../controllers/login";
import AuthController from "../controllers/auth";
import AllController from "../controllers/all";
import StatsController from "../controllers/stats";

router.get("/", HomeController );


router.get("/login", LoginController );
router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);

router.get("/register", RegisterController );
router.post("/register", AuthController.register);

router.get("/secret/:term?", SecretController );
router.get("/all", AllController );
router.get("/stats", StatsController.Count);
router.get("/secret/search", StatsController.Search);
router.get("/stats/avg", StatsController.Avg);

router.get("*", ErrorController );
export default router;