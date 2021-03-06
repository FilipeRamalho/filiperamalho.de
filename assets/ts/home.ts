import m from 'mithril'
//@ts-ignore
import { canUseWebP, isMobile } from './utils.ts';
//@ts-ignore
import Button from './button.ts'

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
                        h2('.no-margin .fs200 .uppercase .big-display',"Student • Programmierer • Radfahrer"),
                        h2('.no-margin .fs100 .uppercase .middle-display',"Student • Programmierer • Radfahrer"),
                        h2('.no-margin .fs100 .uppercase .small-display',"Student", br(), "Programmierer",br(), "Radfahrer"),
                        h2('.no-margin .fs100 .uppercase .mini-display',"Student", br(), "Programmierer",br(), "Radfahrer"),
                    ]),
                    div('.row',[
                        div('.button',
                            m(Button,{
                                newtab: true,
                                href:"https://twitter.com/filipe_mdsr",
                                color:".twitter",
                                icon:".fab .twitterblue .fa-twitter",
                                name:"Twitter"
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
                    ]),
                    div('.row',[
                        div('.button',
                            m(Button,{
                                newtab: false,
                                href:"#!/switch",
                                color:".switch",
                                icon:".fas .red .fa-gamepad",
                                name:"Friend Code"
                            })
                        )
                    ])
                ])
            ]),
            div('.rhein .image ' + webp,
                div('.image-location',
                    p('.no-margin'," Rhein, Bonn-Gronau")
                )
            ),
            div('.quote',[
                img('.inline-block',{src:"assets/img/starfleet.png",alt:"Starfleet icon"}),
                div('.text',[
                    h1("It's possible to commit no mistakes and still lose. That's not a weakness, that is life."),
                    h2("-Jean-Luc Picard")
                ])
            ])
        ])
    }
}
export default page;