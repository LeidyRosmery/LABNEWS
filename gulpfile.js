'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');

const concat = require('gulp-concat');

const config = {
    source: "./src/",
    dist: "./public/"
};


const paths = {
    assets: "assets/",
    html: "/*.html",
    js: "js/**/*.js",
    components: "js/components/**.js",
    utils: "js/utils/**.js",
    sass: "scss/**/*.scss",
    mainSass: "scss/style.scss",
    mainJs: "js/index.js"
};

const sources = {

    assets: config.source + paths.assets,
    html: config.source + paths.html,
    sass: paths.assets + paths.sass,
    js: paths.assets + paths.js,
    components: config.source + paths.assets + paths.components,
    utils: config.source + paths.assets + paths.utils,
    rootSass: config.source + paths.assets + paths.mainSass,
    rootJs: config.source + paths.assets + paths.mainJs
};

gulp.task('html', () => {
    gulp.src(sources.html)
        .pipe(gulp.dest(config.dist));
});

gulp.task('sass', () => {
    gulp.src(sources.rootSass)
        .pipe(sass({
            outputStyle: "compressed"
        }).on("Error", sass.logError))
        .pipe(gulp.dest(config.dist + paths.assets + "css"));
});


gulp.task('js', () => {
    gulp.src(["./src/assets/js/components/principal.js", "./src/assets/js/components/header.js", "./src/assets/js/utils/get-json.js", "./src/assets/js/index.js"])
        .pipe(concat('index.js'))
        .pipe(browserify())
        .pipe(gulp.dest(config.dist + paths.assets + "js"))
});
