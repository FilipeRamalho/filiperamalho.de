import * as m from "mithril";

export function canUseWebP() {
    const elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d'))) {
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }

    // very old browser like IE 8, canvas not supported
    return false;
}

export function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}


export function route(url: string, newTab: boolean) {
    if (url.startsWith("http")) {
        newTab ? window.open(url, '_blank') : window.location.href = url;
        return
    }
    m.route.set(url);
}