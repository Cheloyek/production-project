import type { Configuration as WebServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): WebServerConfiguration {
    return {
        port: options.port,
        open: true, // auto open page
        historyApiFallback: true,
        hot: true,
    };
}
