import axios from "axios";
import { validationResult,body, param } from "express-validator";

export const validationResultExpress = (req,res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    
    next();
};

export const bodyUrlValidation = [
  body("url", "formato url invalido")
    .trim()
    .notEmpty()
    .custom( async(value) => {
      try {
        if(!value.startsWith("https://")){
          value = "https://" + value;
        }
        await axios.get(value);
        console.log(value)
        return value;
      } catch (error) {
        console.log(error.message)
        throw new Error ("no se encuentra url valido") 
      }
    })
  ,
  validationResultExpress
]

export const bodyRegisterValidation =  [
    body("email", "Formato de email incorrecto")
      .trim()
      .isEmail()
      .normalizeEmail(),
    body("password", "formato de password incorrecto")
      .trim()
      .isLength({ min: 6 })
      .custom((value, {req}) => {
        if (value !== req.body.repassword) {
            throw new Error ("no coinciden las contraseñas");
        }
        return value;
      }), validationResultExpress
  ];

export const bodyLoginValidator = [
    body("email", "Formato de email incorrecto")
      .trim()
      .isEmail()
      .normalizeEmail(),
    body("password", "formato de password incorrecto")
      .trim()
      .isLength({ min: 6 }),
      validationResultExpress
  ];

export const paramsUrlValidator = [
    param("id", "Formato no valido (express-validator)")
      .trim()
      .notEmpty()
      .escape()
  ,
  validationResultExpress
];