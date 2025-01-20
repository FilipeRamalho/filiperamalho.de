import * as m from "mithril";
import BaseTemplate, {Base} from "../components/Base";
import style from "/assets/css/pages/memberships.module.css";
import {Button} from "../components/Button";

const {div,h1,a,img} = require("hyperscript-helpers")(m);


const HomePage: Base = new Base(
    {
        name: "Mitgliedschaften",
        id: "memberships",
        route: "/mitgliedschaften",
    },{
        view() {
            return m(BaseTemplate, HomePage.attrs, [
                div({class: style.blocks}, [
                    div({class: style.splashblock},[
                        h1("Mitgliedschaften"),
                        a({href:"https://adfc.de", target: "_blank", rel:" noopener noreferrer",},img({src: require("/assets/img/logos/adfc.png"),alt: "Allgemeiner Deutscher Fahrrad-Club"})),
                        a({href:"https://dpg-physik.de", target: "_blank", rel:" noopener noreferrer",},img({src: require("/assets/img/logos/dpg.png"),alt: "Deutsche Physikalische Gesellschaft"})),
                        a({href:"https://fachschaft.physik.uni-mainz.de", target: "_blank", rel:" noopener noreferrer",},img({src: require("/assets/img/logos/fs.jpg"),alt: "Fachschaft Physik Mainz"})),
                        a({href:"https://fdp.de", target: "_blank", rel:" noopener noreferrer",},img({src: require("/assets/img/logos/fdp.png"),alt: "Freie Demokratische Partei"})),
                        a({href:"https://julis.de", target: "_blank", rel:" noopener noreferrer",},img({src: require("/assets/img/logos/julis.png"),alt: "Junge Liberale"})),
                        a({href:"https://lisl-deutschland.de", target: "_blank", rel:" noopener noreferrer",},img({src: require("/assets/img/logos/lisl.png"),alt: "Liberale Schwule, Lesben, Bi, Trans und Queer"})),
                        a({href:"https://yimby.jetzt", target: "_blank", rel:" noopener noreferrer",},img({src: require("/assets/img/logos/yimby.svg"),alt: "YIMBY Deutschland"})),
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