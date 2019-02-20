const gulp = require('gulp'),
	fileinclude = require('gulp-file-include'),
	browserSync = require('browser-sync').create();

gulp.task('build', function() {
    return gulp.src('dev/index.html')
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('public/'));
    
    done();
  });

// Static Server + watching scss/html files

gulp.task('serve', function(done) {

    browserSync.init({
        server: "public/"
    });

    // gulp.watch("scr/sass/*.sass", gulp.series('sass'));
    gulp.watch("dev/**/*.html", gulp.series('build')).on('change', () => {
      browserSync.reload();
      done();
    });
  

    done();
});


gulp.task('default', gulp.series('build', 'serve'));