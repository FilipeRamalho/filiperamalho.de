import * as m from "mithril";
import css from "/assets/css/components/navbar.module.css";

const {div, a, img} = require("hyperscript-helpers")(m);


const Navbar: m.Component = {
    view() {
        return div("." + css.navbar, [
            a({href: "#!/"}, /**img("." + css.logo, {src: require('/assets/img/icon.png')})*/),
            /**img("." + css.logo2, {src: require('/assets/img/...')}),*/
        ]);
    },
};

export default Navbar;
