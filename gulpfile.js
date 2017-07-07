'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');

const config = {
    source: "./src/",
    dist: "./public/"
};


const paths = {
    html: "/*.html",
    sass: "scss/**/*.scss",
    assets: "assets/",
    mainSass: "scss/style.scss"
};

const sources = {
    html: config.source + paths.html,
    rootSass: config.source + paths.assets + paths.mainSass,
    sass: paths.assets + paths.sass,
    assets: config.source + paths.assets
};

gulp.task('html', () => {
    gulp.src(sources.html)
        .pipe(gulp.dest(config.dist));
});

gulp.task('sass', ()=>{
	gulp.src(sources.rootSass)
	.pipe(sass({
			outputStyle: "compressed"
		}).on("Error", sass.logError))
	.pipe(gulp.dest(config.dist+paths.assets+"css"));
});
