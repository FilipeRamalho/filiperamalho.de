import * as m from "mithril";

const handlers = {
    500: (err: any) => console.error(err.code, err.response)
}

const request = (method: string) => (url: string, options?: any) =>
    m.request({
        method,
        url: window.location.origin + "/api" + url,
        withCredentials: true,
        config: (xhr) => {
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        },
        extract: function (xhr) {
            return {status: xhr.status, body: xhr.responseText};
        },
        ...options
    })
        .catch(err => {
            if (err.code in handlers) handlers[err.code](err)
            else throw err
        })

export default {
    get: request('GET'),
    put: request('PUT'),
    post: request('POST'),
    delete: request('DELETE')
}