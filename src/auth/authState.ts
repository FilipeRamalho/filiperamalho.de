import api from "../API/wrapper";
import * as m from "mithril";

enum Scope {
    None = 0,
    READ = 1 << 1,
    EDIT = 1 << 2,
    ADMIN= (1 << 3),
    SUPERUSER = (1 << 3) -1
}

const AuthState = {
    authenticated: false,
    scope: 0,
    async check() {
        const result = await api.get("/checklogin")
        if (result == null || result['body'] != "logged_in") {
            m.route.set("/login");
            this.authenticated = false
        }else{
            this.authenticated = true
        }
        return this.authenticated
    },
    canRead() {
        return (this.scope & Scope.READ) === Scope.READ
    },
    canEdit() {
        return (this.scope & Scope.EDIT) === Scope.EDIT
    },
    canAdmin() {
        return (this.scope & Scope.ADMIN) === Scope.ADMIN
    },
    isSuperUser() {
        return (this.scope & Scope.SUPERUSER) === Scope.SUPERUSER
    }
}

export default AuthState