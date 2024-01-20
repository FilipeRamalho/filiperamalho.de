import * as m from "mithril";
import style from "/assets/css/components/locationtag.module.css"

const {div, p} = require("hyperscript-helpers")(m)

interface Attrs {
    location: string;
}

const locationTag: m.Component<Attrs> = {
    view(vnode: m.Vnode<Attrs>) {
        return div('.' + style.locationTag,
            p('.' + style.location, vnode.attrs.location)
        )
    }
}

export default locationTag;