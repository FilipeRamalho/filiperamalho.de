import * as m from "mithril";
import css from "/assets/css/components/pagetemplate.module.css";

const {div} = require("hyperscript-helpers")(m);


export interface BaseAttrs {
    name: string
    id?: string
    route: string
    login?: boolean
 //   subModules?: Base[]
 //   parentModule?: Base
}

export class Base {
    attrs: BaseAttrs;
    component: m.Component<BaseAttrs>;
    constructor(attrs: BaseAttrs, component: m.Component<BaseAttrs>){
        this.attrs = attrs;
        this.component = component;
    }
}

const BaseTemplate = {
    async oninit(vnode: m.Vnode<BaseAttrs>) {
        document.title = "Filipe Ramalho - " + vnode.attrs.name
    },
    view(vnode: m.Vnode<BaseAttrs>) {
        return div({class: css.base}, vnode.children)
    }
}


export default BaseTemplate;
