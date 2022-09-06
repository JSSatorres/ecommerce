import express from "express";
import morgan from "morgan";
import cors from "cors";
//import fileUpload from "express-fileupload";

import userRouter from "./routes/user-routes.js";
// import songsRouter from "./routes/songs-routes.js";
// import playlistRouter from "./routes/playList-routes.js";

// import config from "./config/config.js";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json({ limit: "2500mb" }));
/* app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
); */
app.use("/api/users", userRouter);
// app.use(songsRouter);
// app.use(playlistRouter);

export default app;
