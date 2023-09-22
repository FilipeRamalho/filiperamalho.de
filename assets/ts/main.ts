import m from 'mithril'
import HomeView from './home'
import FCView from './fc'

import '../../index.html'
import '../../favicon.ico'

function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('../img/', false, /\.(png|jpe?g|webp)$/));
const stylesheets = importAll(require.context('../css/', false, /\.(css)$/));

const el = document.getElementById('content')
m.route(el, "/home", {
    "/home": HomeView,
    "/switch": FCView
})