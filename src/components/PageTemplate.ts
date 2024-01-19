import * as m from "mithril";
import AuthState from "../auth/authState";
import Navbar from "./Navbar";

const {div} = require("hyperscript-helpers")(m);

interface  Attrs {
    login: boolean
    css?: string
}

const PageTemplate: m.Component<Attrs> = {
    async oninit(vnode: m.Vnode<Attrs>) {
        if (vnode.attrs.login == true) {
            await AuthState.check()
        }
    },
    view(vnode: m.Vnode<Attrs>) {
        if (vnode.attrs.login == true) {
            return !AuthState.authenticated
                ? null
                : div('.'+(vnode.attrs.css ?? ""), [m(Navbar), vnode.children])
        } else {
            return div('.'+(vnode.attrs.css ?? ""), [m(Navbar), vnode.children])
        }
    }
}

export default PageTemplate;
