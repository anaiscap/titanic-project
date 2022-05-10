import express from "express";
const router = express.Router();

import HomeController from "../controllers/home";
import RegisterController from "../controllers/register";
import SecretController from "../controllers/secret";
import LoginController from "../controllers/login";
import AuthController from "../controllers/auth";

router.get("/", HomeController );

router.get("/secret/:sex?", SecretController );


router.get("/login", LoginController );
router.post('/login', AuthController.login);

router.get("/register", RegisterController );
router.post("/register", AuthController.register);



export default router;