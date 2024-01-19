import api from "../API/wrapper";
import * as m from "mithril";

export async function processLogin(e: Event) {
    e.preventDefault();
    const result = await api.post("/login", {
        body: {
            username: e.target[0].value,
            password: e.target[1].value,
        }
    })
    if (result['body'] == "logged_in") {
        m.route.set("/");
    }
}