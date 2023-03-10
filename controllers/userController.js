// const asyncHandler = require("express-async-handler");
// const User = require("../models/userModel");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const Token = require("../models/tokenModel");
// const crypto = require("crypto");



// // Generate Token
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
// };

// // Register User
// const registerUser = asyncHandler(async (req, res) => {
//   const { name, lastname, email, password } = req.body;

//   // Validation
//   if (!name || !lastname || !email || !password) {
//     res.status(400);
//     throw new Error("Please fill in all required fields");
//   }

//   if (password.length < 6) {
//     res.status(400);
//     throw new Error("Password must be up 6 characters");
//   }

//   // Check if user email already exist

//   const userExists = await User.findOne({ email });

//   if (userExists) {
//     res.status(400);
//     throw new Error("Email has already been registered");
//   }


//   // Create new user
//   const user = await User.create({
//     name,
//     lastname,
//     email,
//     password,
//   });

//   // Generate Token
//   const token = generateToken(user._id)

//   // Send HTTP-only cookie
//   res.cookie("token", token, {
//     path: "/",
//     httpOnly: true,
//     expires: new Date(Date.now() + 1000 * 86), // 1 day
//     sameSite: "none",
//     secure: true,
//   });

//   if (user) {
//     const { _id, name, lastname, email } = user;
//     res.status(201).json({
//       _id,
//       name,
//       lastname,
//       email,
//       token,
//     });
//   } else {
//     res.status(400);
//     throw new Error("Invalid user data");
//   }
// });

// // Login User
// const loginUser = asyncHandler( async(req, res) => {
  
//     const { email, password } = req.body

//     // Validate Request
//     if (!email || !password) {
//       res.status(400);
//       throw new Error("Please add email and password");
//     }

//     // Check if user exists
//     const user = await User.findOne({email})

//     if(!user) {
//       res.status(400);
//       throw new Error("User not found, please signup");
//     }

//     // User exists, check if password is correct
//     const passwordIsCorrect = await bcrypt.compare(password, user.password)

//     // Generate token
//     const token = generateToken(user._id);

//     // Send HTTP-oonly cookie
//     res.cookie("token", token, {
//       path: "/",
//       httpOnly: true,
//       expires: new Date(Date.now() + 1000 * 86400), // 1 day
//       sameSite: "none",
//       secure: true,
//     });



//     if (user && passwordIsCorrect) {
//       const { _id, name, lastname, email } = user;
//       res.status(200).json({
//         _id,
//         name,
//         lastname,
//         email,
//         password,
//         token,
//       });
//     } else {
//       res.status(400);
//       throw new Error("Invalid email or password");
//     }
// });


// // Log out User

// const logOut = asyncHandler( async(req,res) => {
//   res.cookie("token", "", {
//     path: "/",
//     httpOnly: true,
//     expires: new Date(0), // remove token
//     sameSite: "none",
//     secure: true
//   });
//   return res.status(200).json({ message: "Successfuly Logged Out"})  
// })

// module.exports = {
//   registerUser,
//   loginUser,
//   logOut,
// };
