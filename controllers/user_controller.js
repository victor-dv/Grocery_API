exports.singup_user = (req, res) => {
 const email = req.body.email
 const name = req.body.name
 const password = req.body.password
 const user_list = {email: email, password: password, name:name}

    res.status(201).json({
    Message: "Usuario criado",
    user: user_list
 })
}

exports.singin_user = (req, res) =>{
    console.log("Login feito")
}

