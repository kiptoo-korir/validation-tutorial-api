const { check, validationResult } = require("express-validator");

function createUserValidationRules() {
  return [
    check("name")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("Please input your name"),
    check("email")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("Please input your email.")
      .isEmail()
      .withMessage("Please input a valid email"),
    check("password")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("Please input your password.")
      .isStrongPassword({
        minLength: 8,
        minUppercase: 1,
        minLowercase: 1,
        minSymbols: 0,
      })
      .withMessage(
        "Please ensure your password is at least 8 characters long, has at least one uppercase and lowercase letters."
      ),
  ];
}

function validationHandler(request, response, next) {
  const errors = validationResult(request);
  if (errors.isEmpty()) {
    return next();
  }

  return response.status(422).json({ errors: errors.array() });
}

module.exports = {
  validateCreateUser: [createUserValidationRules(), validationHandler],
};
