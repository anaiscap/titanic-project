import express from "express";
const router = express.Router();

import HomeController from "../controllers/home";
import RegisterController from "../controllers/register";
import SecretController from "../controllers/secret";
import LoginController from "../controllers/login";
import AuthController from "../controllers/auth";
import DataController from "../controllers/datasearch";


router.get("/", HomeController );

router.get("/secret", SecretController );

router.get("/login", LoginController );
router.post('/login', AuthController.login);

router.get('/findall', DataController.data);


router.get("/register", RegisterController );

router.post("/register", AuthController.register);



export default router;