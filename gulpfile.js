const path = require('path');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');

gulp.task(
    'default',
    ['uglifyjs', 'minifyhtml', 'minifycss', 'minifyimg'],
    () => {
        console.log('all done');
    }
);

gulp.task('empty', () => {
    return del.sync(['dist']);
});

gulp.task('uglifyjs', ['empty'], () => {
    return gulp
        .src(['js/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('minifyhtml', ['empty'], () => {
    return gulp
        .src('html/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/html'));
});

gulp.task('minifycss', () => {
    return gulp
        .src('css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('minifyimg', () =>
    gulp
        .src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);
