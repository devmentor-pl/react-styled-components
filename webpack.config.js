const path = require('path');
// importuję bibliotękę [path] z [node.js]
const HtmlWebpackPlugin = require('html-webpack-plugin');
// importuję plugin [html-webpack-plugin]
const CssWebpackPlugin = require('mini-css-extract-plugin');
// importuję plugin [mini-css-extract-plugin]
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// importuję plugin [clean-webpack-plugin]
module.exports = function (env = {}) {
    const { production: isProd = false } = env;
    console.log(env);
    // w zmiennej [isProd] przechowuje informację
    // w jakim trybie uruchomić webpack-a

    return {
        entry: './src/app.js',
        // definiuje plik wejściowy
        mode: isProd ? 'production' : 'development',
        // definiuje tryb pracy webpack-a
        devtool: isProd ? false : 'eval-cheap-module-source-map',
        // definiuje identyfikację kodu źródłowego
        output: {
            path: path.resolve(__dirname, 'build'),
            // definiuje ścieżką wyjściową
            filename: 'app.[hash].js',
            // definiuję nazwę pliku wyjściowego
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    // określam jakie pliki
                    // będą brane pod uwagę
                    exclude: /node_modules/,
                    // określam wykluczenia
                    use: 'babel-loader',
                    // określam jaki [loader]
                    // ma być wykorzystany
                },
                {
                    test: /\.css$/,
                    // tylko pliki z rozszerzeniem .css
                    exclude: /node_modules/,
                    // wykluczam pliki zwierającą
                    // wpisany ciąg znaków w ścieżce
                    use: [
                        isProd ? CssWebpackPlugin.loader : 'style-loader',
                        //'css-loader'
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: isProd ? false : true,
                                // ustawiam identyfikację kodu źródłowego
                            },
                        },
                    ],
                    // określam kolejność wykorzystanych
                    // loader-ów tj. od lewej do prawej (lub o dołu do góry)
                },
                {
                    test: /\.scss$/,
                    // tylko pliki z rozszerzeniem .scss
                    use: [
                        isProd ? CssWebpackPlugin.loader : 'style-loader',
                        //'css-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: isProd ? false : true,
                                // ustawiam identyfikację kodu źródłowego
                            },
                        },
                        // 'sass-loader'
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isProd ? false : true,
                                // ustawiam identyfikację kodu źródłowego
                                sassOptions: {
                                    outputStyle: isProd
                                        ? 'compressed'
                                        : 'expanded',
                                    // ustawiam sposób zapisu kodu CSS
                                },
                            },
                        },
                    ],
                    // określam kolejność wykorzystanych
                    // loader-ów tj. od lewej do prawej
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    // dodaję rozszerzenia obrazów
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            // ustawiam nazwę pliku
                            outputPath: 'images',
                            // ustawiam nazwę katalogu, do którego
                            // będą kopiowane obrazy
                        },
                    },
                    // tym razem tylko jeden loader
                },
                {
                    test: /\.(ttf|otf|woff|woff2)$/,
                    // dodaję rozszerzenia fontów
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            // ustawiam nazwę pliku
                            outputPath: 'fonts',
                            // ustawiam nazwę katalogu, do którego
                            // będą kopiowane font-y
                        },
                    },
                    // tym razem tylko jeden loader
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                // wskazuje plik źródłowy
                filename: 'index.html',
                // określan nazwę dla pliku
            }),
            new CssWebpackPlugin({
                filename: '[name].[hash].css',
                // określam nazwę pliku css
            }),
            new CleanWebpackPlugin(),
            // uruchamiam czyszczenie katalogu [build]
        ],
    };
};
// eksportuję ustawienia dla webpack-a
