import bodyParser from "body-parser";
import express from "express";
import { useRouter } from "modules/user/adapters/user.controller";

const cors = require("cors");
const app = express();

app.use(
    cors({
        origin: '*',
    })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '20mb'}));

app.get('/', (req, res) => {
    res.send('Server running...');
});
//ROUTER
app.use("/api/users", useRouter);

export default app;