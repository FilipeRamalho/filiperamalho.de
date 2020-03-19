import m from 'mithril'
//@ts-ignore
import { canUseWebP } from './utils.ts';
//@ts-ignore 
import Card from './card.ts'
import '../css/portfolio.css'

const { div,p,a,i,button,picture,source,img,h1,h2,br,hr} =
require('hyperscript-helpers')(m);

var webp = "no-webp";

if(canUseWebP()){
    webp = "webp";
}

var page = {
    view: function() {
        return div('.portfolio .fancy',[
            div('.bar',[
                "Filipe Ramalho - Portfolio",
                a({href:"#!/home"},
                    button('.white .fs50 .right .home',{disabled:"true",'aria-disabled':"true"},[
                        i('.icon .fas .black .fa-home'),
                        div('.name',"Homepage")
                    ])
                )
            ]),
            div('.text-center',[                
                m(Card,{
                    src:"assets/img/website4.webp",
                    title:"Develop experiences",
                    text:"Test"
                })
            ])
        ])
    }
}
export default page;