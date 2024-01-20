import * as m from "mithril";
import {Button, DefaultIcons} from "../components/Button";
import {canUseWebP, isMobile} from "../utils";
import style from "/assets/css/pages/home.module.css";
import locationTag from "../components/LocationTag";

const {div, p, h1, h2, span} =
    require('hyperscript-helpers')(m);

const webp = canUseWebP() ? '.'+style.webp : '.'+style.noWebp;
const mobile = isMobile() ? '.'+style.mobile : '.'+style.noMobile;

const page = {
    view: function () {
        return div('.' + style.page, [
            div('.'+style.splash+'.'+style.strassburg+'.'+style.image + webp + mobile, [
                div('.'+style.overlay),
                m(locationTag, {location: "Place de la Cathédrale, Straßburg"}),
                div('.'+style.content, [
                    div('.'+style.title, [
                        h1(span('.'+style.rainbow, "Filipe Ramalho")),
                        h2( '.'+style.bigDisplay,"Switch Friend Code"),
                        h2( '.'+style.bigDisplay,"🎮 SW-5714-5270-7715"),
                        h2( '.'+style.smallDisplay,"Switch Friend Code"),
                        h2( '.'+style.smallDisplay,"🎮 SW-5714-5270-7715"),
                    ]),
                    div('.'+style.row, [
                        m(Button, {
                            href: "#!/home",
                            icon: DefaultIcons.Home,
                            name: "Back Home"
                        })
                    ]),
                ])
            ])
        ]);
    }
}
export default page;