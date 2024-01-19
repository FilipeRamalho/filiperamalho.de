import * as m from "mithril";
import PageTemplate from "../components/PageTemplate";
import {processLogin} from "../auth/authHandler";
import style from "/assets/css/pages/login.module.css";

const {div, button, form, label, input, h1, br} =
    require("hyperscript-helpers")(m);

const page : m.Component = {
    view: function () {
        return m(PageTemplate, {css: style.page, login: false}, [
            div("." + style.loginForm, [
                h1("Login"),
                form(
                    {
                        onsubmit: processLogin,
                    },
                    [
                        div([
                            label("Benutzername: "),
                            br(),
                            input({type: "text"}),
                        ]),
                        br(),
                        div([
                            label("Password:"),
                            br(),
                            input({type: "password"}),
                        ]),
                        br(),
                        button("Submit"),
                    ],
                ),
            ]),
        ]);
    },
};
export default page;
