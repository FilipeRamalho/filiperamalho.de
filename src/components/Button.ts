import * as m from "mithril";
import style from "/assets/css/components/button.module.css"
import fa from "/assets/css/fontawesome.module.css"
import {route} from "../utils"

const {span, div, i, button} = require('hyperscript-helpers')(m);

interface IconParams {
    faIcon: string,
    color?: string,
    textColor?: string,
    complexStyle?: string
}

class Icon {
    color: string
    faIcon: string
    textColor: string
    complexStyle: string

    constructor(params: IconParams) {
        this.faIcon = params.faIcon
        this.color = params.color ?? "black"
        this.textColor = params.textColor ?? ""
        this.complexStyle = params.complexStyle ?? ""
    }
}

export const DefaultIcons = {
    Threads: new Icon({faIcon: "." + fa.fab + "." + fa.threads, complexStyle: "." + style.threads}),
    Github: new Icon({faIcon: "." + fa.fab + "." + fa.github, color: "var(--github)"}),
    Uni: new Icon({faIcon: "." + fa.fa + "." + fa.uni, color: "var(--JGURed)"}),
    Home: new Icon({faIcon: "." + fa.fa + "." + fa.home, color: "var(--default)"}),
}

interface Attrs {
    name: string
    href: string
    newTab?: boolean
    icon: Icon
}

export const Button: m.Component<Attrs> = {
    view: function (vnode: m.Vnode<Attrs>) {
        return button('.' + style.button, {
            onclick: () => {
                route(vnode.attrs.href, vnode.attrs.newTab)
            }
        }, [
            i('.' + style.icon + vnode.attrs.icon.faIcon, {
                style: "color:" + vnode.attrs.icon.color
            }),
            div('.' + style.name, [
                div('.' + style.background + vnode.attrs.icon.complexStyle, {
                    style: "background-color:" + vnode.attrs.icon.color
                }),
                div('.' + style.text, {
                    style: "color:" + vnode.attrs.icon.textColor
                },vnode.attrs.name)
            ])
        ])
    }
}