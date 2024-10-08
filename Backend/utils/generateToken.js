import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie= (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '15d' }); //method jwt sign is called ,takes payload userId emmbede in jwt secret key verify using userId


    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000, //terms of milisecond

        httpOnly :true, //prevent cross-site scripting attack

        sameSite: "strict", //csrf protection
        secure:process.env.NODE_ENV !== "development",

    })

}
export default generateTokenAndSetCookie;

