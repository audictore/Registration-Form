const form_registrer = document.getElementById("form_registrer")

form_registrer.addEventListener("submit", validarFormulario)

function validarFormulario(e){
    e.preventDefault()

    const name_user = document.getElementById("name_user").value
    const lastname_user = document.getElementById("lastname_user").value
    const email_user = document.getElementById("email_user").value
    const password_user = document.getElementById("password_user").value
    const span_error = document.getElementById("span_error")
    const checkbox_register = document.getElementById("checkbox_register").checked

    let valid = true;
    
    //validar name_user
    if(name_user.match(/[0-9]/)){
        span_error.innerHTML = "El nombre no debe tener ningun numero."
        valid = false
    }
    else if (name_user.match(/[!@#$%^&*(),.?":{}|<>]/)){
        span_error.innerHTML = "El nombre no debe tener ningun caracter especial."
        valid = false
    }
    else if (name_user == ""){
        span_error.innerHTML = "Debes escribir un nombre."
        valid = false
    }

    //validar lastname_user
    if(lastname_user.match(/[0-9]/)){
        span_error.innerHTML = "El nombre no debe tener ningun numero."
        valid = false
    }
    else if (lastname_user.match(/[!@#$%^&*(),.?":{}|<>]/)){
        span_error.innerHTML = "El nombre no debe tener ningun caracter especial."
        valid = false
    }
    else if (lastname_user == ""){
        span_error.innerHTML = "Debes escribir un apellido."
        valid = false
    }

    //validar password_user
    if(password_user.length < 12){
        span_error.innerHTML = "La contraseña debe tener mas de 12 caractres."
        valid = false
    }
    else if (!password_user.match(/[A-Z]/)){
        span_error.innerHTML = "La contraseña debe tener almenos una letra mayuscula."
        valid = false
    }
    else if (!password_user.match(/[a-z]/)){
        span_error.innerHTML = "La contraseña debe tener almenos una letra minuscula."
        valid = false
    }
    else if (!password_user.match(/[0-9]/)){
        span_error.innerHTML = "La contraseña debe tener almenos un numero."
        valid = false

    }
    else if (!password_user.match(/[!@#$%^&*(),.?":{}|<>]/)){
        span_error.innerHTML = "La contraseña debe tener almenos un caracter especial."
        valid = false
    }
    else if (password_user == ""){
        span_error.innerHTML = "Debes escribir una contraseña."
        valid = false
    }

    // Validar checkbox
    if (!checkbox_register) {
        span_error.innerHTML ="Debe aceptar los términos y condiciones."
        valid = false
    }

    // Si todas las validaciones son positivas
    if (valid) {
        alert(name_user + lastname_user +" su cuentaha sido creada con exito")
    }
}




