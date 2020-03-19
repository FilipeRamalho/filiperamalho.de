import m from 'mithril'

const { div,p,a,i,button,picture,source,img,h1,h2,br,hr} =
require('hyperscript-helpers')(m);

var Card = {
    view: function(vnode) {
        return div('.card',[
                img({src:vnode.attrs.src}),
                div('.card-title',
                    p('.no-margin .bold .card-title-text',vnode.attrs.title)
                ),
                div('.card-text',
                    p('.no-margin .black',vnode.attrs.text)
                )
            ])
    }
}

export default Card;