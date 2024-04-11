import { ProgressPlugin, Configuration, DefinePlugin } from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const { VueLoaderPlugin } = require('vue-loader')

import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

type Mode = 'production' | 'development'

interface EnvVariables {
    mode: Mode
    port?: number
}

export default (env: EnvVariables) => {

    const isDev = env.mode === 'development'
    const config: Configuration = {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src/app', 'main.ts'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bandle.[contenthash].js',
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, './public', 'index.html'),}),
            new VueLoaderPlugin(),
            isDev && new ProgressPlugin(),
            new DefinePlugin({
                //'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                // ...
              }),
        ],
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.vue?$/,
                    use: 'vue-loader',
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        "sass-loader",
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                      'vue-style-loader',
                      'css-loader',
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js'],
            fallback: {
                net: false,
                assert: false,
                url: false,
                crypto: false,
                tls: false,
            }
        },
        devServer: isDev ? {
            port: env.port ?? 5000,
            open: false,
        } : undefined
    }
    return config
}