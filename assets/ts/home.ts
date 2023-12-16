import m from 'mithril'
//@ts-ignore
import { canUseWebP, isMobile } from './utils.ts';
//@ts-ignore
import Button from './button.ts'
import StarFleetImage from '../img/starfleet.png'

const { div,p,a,i,button,picture,source,img,h1,h2,br,hr,span} =
require('hyperscript-helpers')(m);

var webp = " no-webp ";
var mobile = " no-mobile "

if(canUseWebP()){
    webp = " webp ";
}

if(isMobile()){
    mobile = " mobile ";
}

var page = {
    view: function() {
        return div('.fancy',[
            div('.splash .white .strassburg .image ' + webp + mobile,[
                div('.overlay'),
                div('.image-location',
                    p('.no-margin',"Place de la Cathédrale, Straßbug")
                ),
                div('.content',[
                    div('.title white .verdana-font text-center',[
                        h1('.no-margin',span('.rainbow',"Filipe Ramalho")),
                        h2('.no-margin .fs200 .uppercase .big-display',"Student • Hiwi • Radfahrer"),
                        h2('.no-margin .fs100 .uppercase .middle-display',"Student • Hiwi • Radfahrer"),
                        h2('.no-margin .fs100 .uppercase .small-display',"Student", br(), "Hiwi",br(), "Radfahrer"),
                        h2('.no-margin .fs100 .uppercase .mini-display',"Student", br(), "Hiwi",br(), "Radfahrer"),
                    ]),
                    div('.row',[
                        div('.button',
                            m(Button,{
                                newtab: true,
                                href:"https://threads.net/@filipe_mdsr",
                                color:".threads",
                                icon:".fab .black .fa-threads",
                                name:"Threads"
                            })
                        ),
                        div('.button',
                            m(Button,{
                                newtab: true,
                                href:"https://github.com/FilipeRamalho",
                                color:".github",
                                icon:".fab .black .fa-github",
                                name:"Github"
                            })
                        )
                    ]),/**
                    div('.row',[
                        div('.button',
                            m(Button,{
                                newtab: false,
                                href:"https://fachschaft.physik.uni-mainz.de/fachschaftsrat/mitglieder/",
                                color:".FSR",
                                icon:".fas .JGUred .fa-uni",
                                name:"FSR"
                            })
                        )
                    ])*/
                ])
            ]),
            div('.rhein .image ' + webp,
                div('.image-location',
                    p('.no-margin'," Rhein, Bonn-Gronau")
                )
            ),
            div('.quote',[
                img('.inline-block',{src:StarFleetImage,alt:"Starfleet icon"}),
                div('.text',[
                    h1("It's possible to commit no mistakes and still lose. That's not a weakness, that is life."),
                    h2("-Jean-Luc Picard")
                ])
            ])
        ])
    }
}
export default page;