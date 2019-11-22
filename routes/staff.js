import express from "express";
import bodyParser from "body-parser";

import Staff from "../controller/staff";
import StaffIndustrial from "../controller/staffIndustrial"
import {
    withAuth,
    withStaffAuth
} from "../config/auth";
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

/**
 * @description: For Utracer industrial staff to manipulate data and get data, staff token neede
 */
router.post("/staff/industry", withStaffAuth, (req, res) => {
    console.log("/staff/industry", req.body)
    if (typeof StaffIndustrial[req.body.method] === "function") {
        StaffIndustrial[req.body.method](req.body).then(results => {
            res.send(results);
        });
    } else {
        res.send("Invalid method");
    }
})

/**
 * @description: For UTMS and Utracer use
 */
router.post("/staff", withAuth, (req, res) => {
    console.log(req.body);
    if (typeof Staff[req.body.method] === "function") {
        Staff[req.body.method](req.body).then(results => {
            res.send(results);
        });
    } else {
        res.send("Invalid method");
    }
});

module.exports = router;