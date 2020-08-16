import m from 'mithril'
//@ts-ignore
import { canUseWebP } from './utils.ts';

const { div,p,a,i,button,picture,source,img,h1,h2,br,hr} =
require('hyperscript-helpers')(m);

var webp = "no-webp";

if(canUseWebP()){
    webp = "webp";
}

/*
* @param newtab
* @param href
* @param color
* @param icon
* @param name
*/
var page = {
    view: function(vnode) {
        var target = "";
        var rel = "";
        if(vnode.attrs.newtab == true){
            target = "_blank"
            rel = "noopener noreferrer"
        }
        return a({href:vnode.attrs.href,target:target,rel:rel},
                button('.white '+vnode.attrs.color,{disabled:"true",'aria-disabled':"true"},[
                    i('.icon '+vnode.attrs.icon),
                    div('.name',vnode.attrs.name)
                ])
            )
    }
}

export default page;