import express from "express";
import bodyParser from "body-parser";
import News from "../controller/news";
import { withAuth } from "../config/auth";

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/**
 * @description: Manipulate news related data
 */
router.post("/news", withAuth, (req, res) => {
    if (typeof News[req.body.method] === "function") {
        News[req.body.method](req.body)
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
