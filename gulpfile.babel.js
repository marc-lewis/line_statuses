import gulp from 'gulp';
import browserify from 'browserify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import webserver from 'gulp-webserver';
import log from 'gulplog';
import sourcemaps from 'gulp-sourcemaps';
import assign from 'lodash.assign';
import vueify from 'vueify';


/**
 * Move vue deps into dist
 */
gulp.task('move:vendors', () => {

    // move vue into local/assets/scripts/vue.js
    return gulp.src('./node_modules/vue/dist/*.js')
        .pipe(gulp.dest('./dist/assets/scripts/vendors'));

});

/**
 * Move the index into dist
 */
gulp.task('move:index', () => {

    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));

});

/**
 * A Build task for a dist build (does not set up watchers)
 */
gulp.task('build:js', () => {

    return browserify({
        entries: ['./src/app.js'],
        debug: true,
        transform: ['vueify', 'babelify']
    })
        .bundle()
        .pipe(source('app.bundled.js'))
        .pipe(gulp.dest('./dist/assets/scripts'));

});


/**
 * Watchify set up. This methodology is ripped from
 *  https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md
 *    and
 *  https://medium.com/front-end-hacking/using-watchify-on-multiple-browserify-bundles-b9d6492bc072
 */
const customOpts = {
    entries: ['./src/app.js'],
    debug: true
};
const opts = assign({}, watchify.args, customOpts);
const b = watchify(browserify(opts))
    .transform('babelify', { presets: ['env'] })
    .transform(vueify);

gulp.task('watch:js', () => {

    const watchfn = () => {

        return b.bundle()
            .on('error', log.error.bind(log, 'Browserify Error'))
            .pipe(source('app.bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadmaps:true}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./dist/assets/scripts'));

    }

    b.on('update', watchfn);
    b.on('log', console.log);

    // return an executing func so we don't have to call it separately
    return watchfn();
    
});

/**
 * Serve the dist folder for dev
 */
gulp.task('serve:dist', () => {

    gulp.src('./dist')
        .pipe(webserver({}));

});

/**
 * The default gulp tasks
 */
gulp.task('default', gulp.parallel(
    'move:vendors',
    'move:index',
    'watch:js',
    'serve:dist'
));
