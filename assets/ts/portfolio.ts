import m from 'mithril'
//@ts-ignore
import { canUseWebP } from './utils.ts';
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
                div('.card',[
                    img({src:"assets/img/website4.webp"}),
                    div('.card-title',
                        p('.no-margin .bold .card-title-text',"Develop experiences")
                    ),
                    div('.card-text',
                        p('.no-margin .black',"Test")
                    )
                ])
            ])
        ])
    }
}
export default page;