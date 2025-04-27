export const valiDataform = (auth,email, password) => {

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    const isemailValid = emailRegex.test(email);

    console.log("validation", isemailValid , email);

    const ispasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/.test(password)

    if (!isemailValid) return "*Email is not valid"

    if (!ispasswordValid) return "*Inavalid password"

    return null;


}