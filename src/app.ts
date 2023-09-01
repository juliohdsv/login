import "dotenv/config";
import express from "express";
import path from "path";


import authRouter from "./routes/auth.routes";
import mainRouter from "./routes/main.routes";
import usersRouter from "./routes/users.routes";

const PORT= 3200;//process.env.NODE_PORT? process.env.NODE_PORT: 3200;
const app = express();
const __dirname:string = path.resolve();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

app.listen(
    PORT 
    //console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
); 