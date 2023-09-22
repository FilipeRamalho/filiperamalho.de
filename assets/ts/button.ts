import m from 'mithril'
//@ts-ignore
import { canUseWebP } from './utils.ts';

const { div,p,a,i,button,picture,source,img,h1,h2,br,hr} =
require('hyperscript-helpers')(m);

var webp = "no-webp";

if(canUseWebP()){
    webp = "webp";
}
function route(url,newtab) {
    if(url.startsWith("http")){
        if(newtab){
            window.open(url, '_blank');
        }else{
            window.location.href = url;
        }
    }else{
        m.route.set(url);
    }
}

/*
* @param newtab
* @param href
* @param icon
* @param name
*/
var page = {
    view: function(vnode) {
        return button('.white '+vnode.attrs.color,{
            onclick: function(e){
                route(vnode.attrs.href,vnode.attrs.newtab);
            }
        },[
            i('.icon '+vnode.attrs.icon),
            div('.name',vnode.attrs.name)
        ])
    }
}

export default page;