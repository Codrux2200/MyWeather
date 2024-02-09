import { Router } from "@angular/router";

export const AuthGuard = async () => {
    let m;

    try {
        m = require("../env.json");
        if (m && m.API_KEY !== undefined) {
            console.log("ok");
            localStorage.setItem("API_KEY", m.API_KEY);
            return true;
        } else {
            alert("[GUARD SYSTEME] there is a probleme with the env.json file");
            return false;
        }
    }catch{}
    return true;
    }