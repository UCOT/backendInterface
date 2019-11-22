import express from "express";
import helmet from "helmet";

import companyInfo from "./routes/info";
import staff from "./routes/staff";
import tag from "./routes/tag";
import product from "./routes/product";
import trace from "./routes/trace";
import traceability from "./routes/traceability";
import message from "./routes/message";
import photo from "./routes/photo";
import feedback from "./routes/feedback";
import sms from "./routes/sms";
import bodyParser from "body-parser";
import verification from "./routes/verification";
import news from "./routes/news";
import banner from "./routes/banner";
import version from "./routes/version";
import cookieParser from "cookie-parser";
import iot from "./routes/iot"
import iotPush from "./routes/iot"
const app = express();
const port = process.env.PORT || 5000;

// basic settings of the server
app.use(helmet());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

// router setting for the application
app.post("/company", companyInfo);
app.post("/staff", staff);
app.post("/staff/industry", staff)
app.post("/tag", tag);
app.post("/product", product);
app.post("/trace", trace);
app.post("/traceability", traceability);
app.post("/verification", verification);
app.post("/message", message);
app.post("/photo", photo);
app.post("/photo/noauth", photo);
app.post("/feedback", feedback);
app.post("/sms", sms);
app.post("/news", news);
app.post("/banner", banner);
app.post("/version", version);
app.post("/iot",iot)
app.post("/iotPush",iotPush)

// server starts listening
app.listen(port, () => console.log(`Listening on port ${port}`));
