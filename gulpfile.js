'use strict';
const gulp = require('gulp');
const config = {
	source: "./src/",
	dist: "./public/"
};


const paths = {
	html: "/*.html",
};

const sources = {
	html: config.source + paths.html,
};

gulp.task('html', ()=>{
	gulp.src(sources.html)
	.pipe(gulp.dest(config.dist));
});
