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
        return div([
            div('.splash .white .strassburg .image ' + webp + mobile,[
                div('.overlay'),
                div('.image-location',
                    p('.no-margin',"Place de la Cathédrale, Straßbug")
                ),
                div('.content',[
                    div('.title white .verdana-font text-center',[
                        h1('.no-margin',span('.rainbow',"Filipe Ramalho")),
                        h2('.no-margin .fs200',"Switch Friend Code"),
                        h2('.no-margin .fs200',"🎮 SW-5714-5270-7715"),
                    ]),
                    div('.row',[
                        div('.button',
                            m(Button,{
                                newtab: false,
                                href:"#!/home",
                                color:".github",
                                icon:".fas .black .fa-home",
                                name:"Back to home"
                            })
                        )
                    ])
                ])
            ])
        ])
    }
}
export default page;