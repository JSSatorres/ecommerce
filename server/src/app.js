import app from "./server.js";
import { PORT } from "./config/config.js";
import dbConnectionMongo from "./database/db.js";

dbConnectionMongo();

app.listen(PORT, () => console.log("listening", PORT));
