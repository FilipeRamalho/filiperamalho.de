import * as m from "mithril";
import BaseTemplate, {Base} from "../components/Base";
import style from "/assets/css/pages/home.module.css";
import {Button} from "../components/Button";

const {div,h1,h2,br,img} = require("hyperscript-helpers")(m);


const HomePage: Base = new Base(
    {
        name: "Home",
        id: "home",
        route: "/",
    },{
        view() {
            return m(BaseTemplate, HomePage.attrs, [
                div({class: style.blocks}, [
                    div({class: style.splashblock},[
                        div({class: style.intro},[
                            h1("Filipe",br(), "Ramalho"),
                            "Physiker. ITler. Liberal. YIMBY.",
                            div({class: style.buttons},[
                                m(Button, {
                                    newTab: true,
                                    href: "https://threads.net/@filipe.mdsr",
                                    color: "black",
                                    textColor: "white",
                                    name: "Threads"
                                }),
                                m(Button, {
                                    newTab: true,
                                    href: "https://github.com/FilipeRamalho",
                                    color: "black",
                                    textColor: "white",
                                    name: "Github"
                                }),
                                m(Button, {
                                    newTab: true,
                                    href: "https://www.linkedin.com/in/fmdsr/",
                                    color: "black",
                                    textColor: "white",
                                    name: "LinkedIn"
                                }),
                                m(Button, {
                                    newTab: true,
                                    href: "https://www.instagram.com/filipe.mdsr/",
                                    color: "black",
                                    textColor: "white",
                                    name: "Instagram"
                                }),
                                m(Button, {
                                    newTab: true,
                                    href: "https://yimby.jetzt/author/filipe/",
                                    color: "black",
                                    textColor: "white",
                                    name: "YIMBY DE"
                                })
                            ])
                        ]),
                        div({class: style.img},[img({src: require("/assets/img/profilepicture.jpeg")})])
                    ]),
                    /*div({class: style.block, style: "background-color: #A81900; color: white;"},[
                        h1("Meine Beiträge")
                    ]),*/
                    img({src: require("/assets/img/strassburg.webp")}),
                    div({class: style.block+" "+style.aboutme, style: "background-color: #5B9400; color: white;"},[
                        h1("Über Mich"),
                        br(),
                        "Olá! Mein Name ist Filipe und ich studiere Physik. Nebenbei arbeite ich als Werkstudent im IT-Monitoring bei der Berufsgenossenschaft Holz und Metall.",
                        " Geboren bin ich in Coimbra. Während der Wirtschaftskrise 2009 ist meine Familie nach Rheinhessen gezogen. So hatte ich eine rhoihessisch-portugiesische Kindheit. Dementsprechend trinke ich gerne Wein aus den zwei besten Weinanbaugebieten der Welt.", br(),
                        "Ich fahre leidenschaftlich gerne Fahrrad, sowohl sportlich als auch im Alltag. Außerdem bin ich ein großer Fan von lebendigen, grünen, dichten und modernen Städten.",
                        " Nach einem langen Tag entspanne ich am liebsten mit einer Folge Star Trek oder Doctor Who. Diese Serien sind mehr als nur Unterhaltung für mich - sie zeigen eine Zukunft, wie ich sie mir wünsche: Eine Welt mit mehr Freiheit und Demokratie für alle Menschen.",
                        div({class: style.buttons},[
                            /*m(Button, {
                                newTab: false,
                                href: "/lebenslauf",
                                color: "black",
                                textColor: "white",
                                name: "Lebenslauf"
                            }),*/
                            m(Button, {
                                newTab: false,
                                href: "/mitgliedschaften",
                                color: "black",
                                textColor: "white",
                                name: "Mitgliedschaften"
                            }),
                            /*m(Button, {
                                newTab: false,
                                href: "/galerie",
                                color: "black",
                                textColor: "white",
                                name: "Bildergalerie"
                            }),*/
                        ])
                    ]),
                    /*img({src: require("/assets/img/oszi.jpeg")}),
                    div({class: style.block, style: "background-color: #4B009B; color: white;"},[
                        h1("Meine Projekte")
                    ]),*/
                    img({src: require("/assets/img/schillerplatz.jpeg")}),
                    div({class: style.block+" "+style.quotebox, style: "background-color: #0D6552; color: white;"},[
                        img({src: require("/assets/img/starfleet.png")}),
                        div({class: style.quote},[
                            h1("It’s possible to commit no mistakes and still lose. That’s not a weakness, that is life."),
                            h2("-Jean-Luc Picard")
                        ])
                    ]),
                ]),
            ]);
        }
    }
)

export default HomePage;