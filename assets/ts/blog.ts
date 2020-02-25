import m from 'mithril'
//@ts-ignore
import { canUseWebP } from './utils.ts';
import '../css/portfolio.css'

const { div,p,a,i,button,picture,source,img,h1,h2,br,hr,iframe} =
require('hyperscript-helpers')(m);

var webp = "no-webp";

if(canUseWebP()){
    webp = "webp";
}

var page = {
    view: function() {
        return div('.portfolio .fancy',[
            div('.bar',[
                "Filipe Ramalho - Blog",
                a({href:"#!/home"},
                    button('.white .fs50 .right .home',{disabled:"true",'aria-disabled':"true"},[
                        i('.icon .fas .black .fa-home'),
                        div('.name',"Homepage")
                    ])
                )
            ]),
            iframe(
                {src:"https://filiperamalho.de",frameborder:0}
            )
        ])
    }
}
export default page;