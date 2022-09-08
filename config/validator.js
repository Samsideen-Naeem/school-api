const yup = require("yup");

function validator(data) {
    const userSchema = yup.object().shape({
        username: yup.string().required("username must be filled").min(3).min(20),
        email: yup.string().email().required("email is required").min(3).max(50),
        password: yup.string().email().required("password required").min(8).max(20),
    });
    return userSchema.validate(data);
}
module.exports = { validator };