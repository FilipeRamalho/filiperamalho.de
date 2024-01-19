import * as m from "mithril";
import HomeView from "./pages/Home";
import LoginView from "./pages/Login"
import "../assets/css/main.css";

require("normalize.css");

const el = document.getElementById("content");
m.route(el, "/home", {
    "/home": HomeView,
    "/login": LoginView,
});
