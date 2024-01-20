import * as m from "mithril";
import style from "/assets/css/pages/home.module.css";
import {Button, DefaultIcons} from "../components/Button";
import {canUseWebP, isMobile} from "../utils";
import locationTag from "../components/LocationTag";
import quote from "../components/Quote";

const {div, h1, h2, span, br} = require("hyperscript-helpers")(m);

const webp = canUseWebP() ? '.'+style.webp : '.'+style.noWebp;
const mobile = isMobile() ? '.'+style.mobile : '.'+style.noMobile;

const page: m.Component = {
    view() {
        return div('.' + style.page, [
            div('.'+style.splash+'.'+style.strassburg+'.'+style.image + webp + mobile, [
                div('.'+style.overlay),
                m(locationTag, {location: "Place de la Cathédrale, Straßburg"}),
                div('.'+style.content, [
                    div('.'+style.title, [
                        h1(span('.'+style.rainbow, "Filipe Ramalho")),
                        h2( '.'+style.bigDisplay,"Student • Werkstudent • Radfahrer"),
                        h2('.'+style.smallDisplay, "Student", br(), "Werkstudent", br(), "Radfahrer"),
                    ]),
                    div('.'+style.row, [
                            m(Button, {
                                newTab: true,
                                href: "https://threads.net/@filipe.mdsr",
                                icon: DefaultIcons.Threads,
                                name: "Threads"
                            }),
                            m(Button, {
                                newTab: true,
                                href: "https://github.com/FilipeRamalho",
                                icon: DefaultIcons.Github,
                                name: "Github"
                            })
                    ]),
                ])
            ]),
            div('..'+style.rhein+'.'+style.image + webp,
                m(locationTag, {location: "Rhein, Bonn-Gronau"})
            ),
            m(quote, {
                quote: "It's possible to commit no mistakes and still lose. That's not a weakness, that is life.",
                author: "Jean-Luc Picard",
                img: require("/assets/img/starfleet.png"),
                alt: "Starfleet icon"
            })
        ]);
    }
};
export default page;
