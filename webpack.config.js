const path = require('path');
// importuję bibliotękę [path] z [node.js]
const HtmlWebpackPlugin = require('html-webpack-plugin');
// importuję plugin [html-webpack-plugin]
const CssWebpackPlugin = require('mini-css-extract-plugin');
// importuję plugin [mini-css-extract-plugin]

module.exports = function(env = {}) {

    const {production: isProd = false} = env;
    console.log(env);
    // w zmiennej [isProd] przechowuje informację
    // w jakim trybie uruchomić webpack-a

    return  {
        entry: './src/app.js',
        // definiuje plik wejściowy
        mode: isProd ? 'production' : 'development',
        // definiuje tryb pracy webpack-a
        devtool: isProd ? 
            false : 'source-map',
        // definiuje identyfikację kodu źródłowego
        output: {
            path: path.resolve(__dirname, 'build'),
            // definiuje ścieżką wyjściową
            filename: 'app.[contenthash].js',
            // definiuję nazwę pliku wyjściowego
            clean: true,
            // czyszczę katalog build przed nowym buildem
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
                                    outputStyle: isProd ? 'compressed' : 'expanded',
                                    // ustawiam sposób zapisu kodu CSS
                                },
                            },
                            
                        }
                    ],
                    // określam kolejność wykorzystanych 
                    // loader-ów tj. od lewej do prawej

                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    // dodaję rozszerzenia obrazów
                    type: 'asset/resource',
                    generator: {
                        filename: 'images/[name][contenthash][ext]',
                        // ustawiam nazwę katalogu i pliku
                    },
                },
                {
                    test: /\.(ttf|otf|woff|woff2)$/,
                    // dodaję rozszerzenia fontów
                    type: 'asset/resource',
                    generator: {
                        filename: 'fonts/[name][contenthash][ext]',
                        // ustawiam nazwę katalogu i pliku
                    },
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                // wskazuje plik źródłowy
                filename: 'index.html'
                // określan nazwę dla pliku
            }),
            new CssWebpackPlugin({
                filename: '[name].[contenthash].css',
                // określam nazwę pliku css
            })
        ]
    }
}
// eksportuję ustawienia dla webpack-a
