import m from 'mithril'
// @ts-ignore
import HomeView from './home.ts'


const el = document.getElementById('content')
m.route(el, "/home", {
    "/home": HomeView
})