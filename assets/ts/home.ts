import m from 'mithril'
//@ts-ignore
import { canUseWebP } from './utils.ts';

const { div,p,a,i,button,picture,source,img,h1,h2,br,hr} =
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
                    div('.title white text-center',[
                        h1('.no-margin .roboto-font',"Filipe Ramalho"),
                        h2('.no-margin .roboto-font .fs200 .uppercase .big-display',"Entwickler • Schüler • Physik Enthusiast"),
                        h2('.no-margin .roboto-font .fs200 .uppercase .middle-display',"Entwickler • Schüler",br(), "Physik Enthusiast"),
                        h2('.no-margin .roboto-font .fs100 .uppercase .small-display',"Entwickler", br(), "Schüler",br(), "Physik Enthusiast"),
                    ]),
                    div('.row',[
                        div('.button .left',
                            a({href:"https://twitter.com/filipe_mdsr",target:"_blank",rel:"noopener noreferrer"},
                                button('.white .twitter',{'aria-disabled':"true",disabled:"true"},
                                    i('.icon .fab .twitterblue .fa-twitter'),
                                    div('.name',"Twitter")
                                )
                            )
                        ),
                        div('.button .right',
                            a({href:"https://github.com/FilipeRamalho",target:"_blank",rel:"noopener noreferrer"},
                                button('.white .github',{'aria-disabled':"true",disabled:"true"},
                                    i('.icon .fab .black .fa-github'),
                                    div('.name',"Github")
                                )
                            )
                        )
                    ]),
                    div('.row',[
                        div('.button .left',
                            a({href:"#!/portfolio"},
                                button('.white .portfolio',{'aria-disabled':"true",disabled:"true"},
                                    i('.icon .fas .red .fa-briefcase'),
                                    div('.name',"Portfolio")
                                )
                            )
                        ),
                        div('.button .right',
                            a({href:"https://jolantru.de",target:"_blank",rel:"noopener noreferrer"},
                                button('.white .blog',{'aria-disabled':"true",disabled:"true"},
                                    i('.icon .fas .orange .fa-blog'),
                                    div('.name',"Blog")
                                )
                            )
                        )
                    ]),
                    div('.row',[
                        div('.button .left',
                            a({href:"#!/science"},
                                button('.white .science',{'aria-disabled':"true",disabled:"true"},
                                    i('.icon .fas .science-green .fa-microscope'),
                                    div('.name',"Wissenschaftliche Arbeiten")
                                )
                            )
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