const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const getToken = (user) => {
  return jwt.sign({
    _id:user._id,
    name:user.name,
    email:user.email,
    isAdmin:user.isAdmin
  }, process.env.JWT_SECRET,{
    expiresIn:'48h'
  })
 
}




module.exports = getToken




// session cookie
//Kullanıcı ve ürün operasyonlarında eğer Admin ise kural tanımlaması routerların içine isAdmin olarak yazılacak.


