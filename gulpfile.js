var gulp			= require('gulp'),
	watch 			= require('gulp-watch'),
	browserSync 	= require("browser-sync"),
    reload 			= browserSync.reload,
    less 			= require('gulp-less'),
    autoprefix 		= require('gulp-autoprefixer'),
    fileinclude 	= require('gulp-file-include');

var path = {
	dist: {
		html: './',
		htmlRu: './ru/',
		htmlEn: './en/',
		css: '_asset/css/'
	},
	src: {
		html: '_asset/html/*.html',
		htmlRu: '_asset/html/ru/*.html',
		htmlEn: '_asset/html/en/*.html',
		less: '_asset/less/styles.less'
	},
	watch: {
		html: '_asset/html/**/*.html',
		less: '_asset/less/**/*.less',
		css: '_asset/css/**/*.css',
		fonts: '_asset/fonts/**/*.*',
		js: '_asset/js/**/*.js',
		img: '_asset/img/**/*.*',
		uploads: '_asset/uploads/**/*.*'
	}
};


/* =====================================================
	Server
 ===================================================== */

var config = {
    server: {
        baseDir: "./"
    },
    tunnel: false,
    host: 'localhost',
    port: 3001,
    logPrefix: "Frontend"
};

gulp.task('webserver', function () {
    browserSync(config);
});


/* =====================================================
	Less
 ===================================================== */

gulp.task('less', function () {
    gulp.src(path.src.less)
        .pipe(less())
        .pipe(autoprefix({
           cascade: false
        }))
        .pipe(gulp.dest(path.dist.css))
        .pipe(reload({stream: true}));
});


/* =====================================================
	Html Includes
 ===================================================== */

gulp.task('html', function() {
  gulp.src(path.src.html)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
	    indent: true
    }))
    .pipe(gulp.dest(path.dist.html))
    .pipe(reload({stream: true}));

  gulp.src(path.src.htmlRu)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
	    indent: true
    }))
    .pipe(gulp.dest(path.dist.htmlRu))
    .pipe(reload({stream: true}));

  gulp.src(path.src.htmlEn)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
	    indent: true
    }))
    .pipe(gulp.dest(path.dist.htmlEn))
    .pipe(reload({stream: true}));
});


/* =====================================================
	Watch
 ===================================================== */

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html');
    });
    watch([path.watch.less], function(event, cb) {
        gulp.start('less');
    });
    watch([path.watch.css], function(event, cb) {
        gulp.start('webserver');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('webserver');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('webserver');
    });
    watch([path.watch.uploads], function(event, cb) {
        gulp.start('webserver');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('webserver');
    });

});


/* =====================================================
	Default Task
 ===================================================== */

 gulp.task('default', ['webserver', 'html', 'less', 'watch']);


