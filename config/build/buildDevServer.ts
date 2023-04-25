import {BuildOptions} from "./types/config";
import type { Configuration as WebServerConfiguration} from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): WebServerConfiguration  {

    return {
        port: options.port,
        open: true // auto open page
    }
}