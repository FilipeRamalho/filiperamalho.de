import m from 'mithril'
//@ts-ignore
import HomeView from './home.ts'
//@ts-ignore
import PortfolioView from './portfolio.ts'
//@ts-ignore 
import ScienceView from './science.ts'

import '../../index.html'
import '../../favicon.ico'

function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('../img/', false, /\.(png|jpe?g|svg|webp)$/));
const stylesheets = importAll(require.context('../css/', false, /\.(css)$/));

const el = document.getElementById('content')
m.route(el, "/home", {
    "/home": HomeView,
    "/portfolio": PortfolioView,
    "/science": ScienceView,
})