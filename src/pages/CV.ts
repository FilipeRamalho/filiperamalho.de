import * as m from "mithril";
import BaseTemplate, {Base} from "../components/Base";
import style from "/assets/css/pages/memberships.module.css";
import {Button} from "../components/Button";

const {div,h1} = require("hyperscript-helpers")(m);


const HomePage: Base = new Base(
    {
        name: "Lebenslauf",
        id: "cv",
        route: "/lebenslauf",
    },{
        view() {
            return m(BaseTemplate, HomePage.attrs, [
                div({class: style.blocks}, [
                    div({class: style.splashblock},[
                        h1("Lebenslauf"),
                        m(Button, {
                            newTab: false,
                            href: "/",
                            color: "black",
                            textColor: "white",
                            name: "Startseite"
                        }),
                    ]),
                ]),
            ]);
        }
    }
)

export default HomePage;