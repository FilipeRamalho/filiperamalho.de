import m from 'mithril'
//@ts-ignore
import { canUseWebP } from './utils.ts';
//@ts-ignore
import Button from './button.ts'

const { div,p,a,i,button,picture,source,img,h1,h2,br,hr,span} =
require('hyperscript-helpers')(m);

var webp = "no-webp";

if(canUseWebP()){
    webp = "webp";
}

var page = {
    view: function() {
        return div('.fancy',[
            div('.splash .white .strassburg .image ' + webp,[
                div('.overlay'),
                div('.image-location',
                    p('.no-margin',"Place de la Cathédrale, Straßbug")
                ),
                div('.content',[
                    div('.title white .verdana-font text-center',[
                        h1('.no-margin',span('.rainbow',"Filipe Ramalho")),
                        h2('.no-margin .fs200 .uppercase .big-display',"Student • Programierer • Radfahrer"),
                        h2('.no-margin .fs100 .uppercase .middle-display',"Student • Programierer • Radfahrer"),
                        h2('.no-margin .fs100 .uppercase .small-display',"Student", br(), "Programierer",br(), "Radfahrer"),
                        h2('.no-margin .fs100 .uppercase .mini-display',"Student", br(), "Programierer",br(), "Radfahrer"),
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
                                newtab: true,
                                href:"https://jolantru.de",
                                color:".blog",
                                icon:".fas .orange .fa-blog",
                                name:"Blog"
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