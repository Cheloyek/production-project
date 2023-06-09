import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode,
        // entry: path.resolve(__dirname, 'src', 'index.tsx'),
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            // rules (loader) - предназначен для того чтобы обрабатывать файлы которые выходят
            // за рамки js - png, jpg, svg, scss, css и тд.
            rules: buildLoaders(options),
        },
        // указаны расширения файлов, для которых при импорте не будем указывать расширения
        // Пример: import Component from './component'
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
