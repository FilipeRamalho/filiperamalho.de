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
        return div('.fancy .science',[
            div('.bar',[
                "Filipe Ramalho - Wissenschaftliche Arbeiten",
                a({href:"#!/home"},
                    button('.white .fs50 .right .home',{disabled:"true",'aria-disabled':"true"},[
                        i('.icon .fas .black .fa-home'),
                        div('.name',"Homepage")
                    ])
                )
            ]),
            div('.text-center',[
                div('.card',[
                    img({src:"assets/img/bll.png"}),
                    div('.card-title',
                        p('.no-margin .bold .card-title-text',"Neutrino- forschung am IceCube-Projekt")
                    ),
                    div('.card-text',
                        p('.no-margin .black',"Das IceCube ermöglicht es Supernovae schneller zu finden, wodurch man mehr Daten über die Supernovae sammeln kann. Das IceCube-Projekt ist besonders durch seine Kollaboration erfolgreich, welche so groß geworden ist. In der Neutrinophysik stehen noch viele offene Fragen, es könnte das interessanteste Fachbereich der Physik sein in den nächsten Jahren.")
                    )
                ])
            ])
        ])
    }
}
export default page;