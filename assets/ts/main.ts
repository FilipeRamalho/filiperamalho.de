import m from 'mithril'
// @ts-ignore
import HomeView from './home.ts'

import '../css/main.css'
import '../css/utils.css'
import '../css/fontawesome.css'
import '../css/solid.min.css'
import '../css/brands.min.css'
import '../../index.html'
import '../../favicon.ico'
import '../img/starfleet.webp'

const el = document.getElementById('content')
m.route(el, "/home", {
    "/home": HomeView
})