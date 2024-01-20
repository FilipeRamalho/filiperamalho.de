import * as m from "mithril";
import style from "/assets/css/components/quote.module.css";

const {div, img, h1, h2} = require("hyperscript-helpers")(m)

interface Attrs {
    quote: string;
    author: string;
    img?: any;
    alt?: string;
}

const quote: m.Component<Attrs> = {
    view(vnode: m.Vnode<Attrs>) {
        return div('.' + style.quote, [
            img('.' + style.img, {src: vnode.attrs.img, alt: vnode.attrs.alt}),
            div('.' + style.text, [
                h1(vnode.attrs.quote),
                h2("-" + vnode.attrs.author)
            ])
        ])
    }
}

export default quote;