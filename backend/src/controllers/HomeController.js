require('dotenv').config();
import request from "request";

//process.env.NAME_VARIABLES
let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
};