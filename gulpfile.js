const devURL = 'http://localhost:3000';

// == == == == == == == == == == == == == == ==
// This gulpfile uses the Laravel Elixir API ==
// For Elixir documentation, look here == == ==
// https://laravel.com/docs/elixir  == == == ==
// == == == == == == == == == == == == == == ==

const elixir = require("laravel-elixir");
require('laravel-elixir-imagemin');
require('laravel-elixir-webpack-official');

elixir.config.publicPath = './public/assets/';
elixir.config.assetsPath = './resource/';
elixir.config.css.sass.folder = "scss";

elixir( (mix) => {
    mix
        .webpack('main.js')
        .sass('main.scss')
        .sass('admin.scss')
        .imagemin()
        .browserSync({
            files : [
                'dist/',
                '*.php',
                '**/*.php',
                '**/**/*.php'
            ],
            proxy: devURL
        })
});
