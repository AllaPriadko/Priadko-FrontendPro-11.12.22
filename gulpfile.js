const gulp = require('gulp')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat');


const SRC_DIR = './script.js'
const DIST_DIR = './dist/'

const CSS_DIR = './*.css'

async function def() {
    
    gulp.src(SRC_DIR)
        .pipe(uglify())
        .pipe(gulp.dest(DIST_DIR))
    console.log('Al')

}

async function def() {
    
    gulp.src(CSS_DIR)
        .pipe(concat('all.css'))
        .pipe(gulp.dest(DIST_DIR))
    console.log('Al')

}

gulp.task('default', def)