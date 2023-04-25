import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import {BuildOptions} from "./types/config";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {

    return [
        new HtmlWebpackPlugin({
            // template: path.resolve(__dirname, 'public', 'index.html' )
            template: paths.html
        }),
        new webpack.ProgressPlugin()
    ]
}