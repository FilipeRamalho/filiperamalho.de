import * as m from "mithril";
import style from "/assets/css/components/button.module.css"

const {a} = require('hyperscript-helpers')(m);

interface Attrs {
    name: string
    href: string
    newTab?: boolean
    color: string
    textColor: string
}

export const Button: m.Component<Attrs> = {
    view: function (vnode: m.Vnode<Attrs>) {
        if(vnode.attrs.newTab){
            return a({
                    href: vnode.attrs.href,
                    class: style.button,
                    target: "_blank",
                    rel:" noopener noreferrer",
                    style: "background-color:" + vnode.attrs.color+";"+"color:" + vnode.attrs.textColor
                },
                vnode.attrs.name)
        }else{
            return a({
                    href: vnode.attrs.href,
                    class: style.button,
                    style: "background-color:" + vnode.attrs.color+";"+"color:" + vnode.attrs.textColor
                },
                vnode.attrs.name)
        }
    }
}