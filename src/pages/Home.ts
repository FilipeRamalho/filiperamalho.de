import * as m from "mithril";
import PageTemplate from "../components/PageTemplate";
import style from "/assets/css/pages/home.module.css";

const {div} = require("hyperscript-helpers")(m);

const page: m.Component = {
    view() {
        return m(PageTemplate, {css: style.page, login: true}, [
            div("." + style.views, [
            ]),
        ]);
    }
};
export default page;
