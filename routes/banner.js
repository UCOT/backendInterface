import express from "express";
import bodyParser from "body-parser";
import Banner from "../controller/banner";
import { withAuth } from "../config/auth";

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/**
 * @description: Manipulate Banners for UTracer
 */
router.post("/banner", withAuth, (req, res) => {
    if (typeof Banner[req.body.method] === "function") {
        Banner[req.body.method](req.body)
            .then(results => {
                res.send(results);
            })
            .catch(error => {
                console.log(error);
            });
    } else {
        res.send("Invalid method");
    }
});

module.exports = router;
