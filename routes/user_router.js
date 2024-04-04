const express = require("express")
const router = express.Router()

const user_controller = require("../controllers/user_controller")

router.post("/singup",user_controller.singup_user)

router.post("/singin", user_controller.singin_user)

router.get ("/profile")





module.exports = router