import express from "express";
import http from "http";
import SocketIO from "socket.io";
const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
/** 유저가 서버 디렉토리에 쉽게 접근할 수 없게 하기 위해서
 * 공개하고 싶은 디렉토리만 이렇게 설정해 줘야 함.
 */
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

const handleListen = () => console.log(`Listening on http://localhost:3030`);
httpServer.listen(3030, handleListen);
