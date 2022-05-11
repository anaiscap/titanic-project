import express from "express";
const router = express.Router();

import HomeController from "../controllers/home";
import RegisterController from "../controllers/register";
import SecretController from "../data/secret";
import LoginController from "../controllers/login";
import AuthController from "../controllers/auth";
import AllController from "../data/all";
import AliveController from "../data/alive";
import DeadController from "../data/dead";

router.get("/", HomeController );

router.get("/secret/:term?", SecretController );
router.get("/all", AllController );
router.get("/alive", AliveController );
router.get("/dead", DeadController );


router.get("/login", LoginController );
router.post('/login', AuthController.login);

router.get("/register", RegisterController );
router.post("/register", AuthController.register);



export default router;