import * as m from "mithril";
import pages from './pages'
import "../assets/css/main.css";

require("normalize.css");

m.route.prefix = "";

// Define in which element in index.html mithril will run
const el = document.getElementById("content");

// Set routing prefix
m.route.prefix = ''

// Add routing and install modules
const routes = {}
for(const page of pages){
    routes[page.attrs.route] = page.component
    /*
    if(page.attrs.subModules){
        for(const subPage of page.attrs.subModules){
            routes[subPage.attrs.route] = subPage.component
        }
    }*/
}

// Start Mithril routing with final settings
m.route(el, "/", routes);