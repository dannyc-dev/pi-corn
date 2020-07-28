import { devConfig } from "./dev.js";

export default function setEnvrionments() {
    let config;
    if (process.env.REACT_APP_ENV === "dev") {
        return config = devConfig;
    }
}