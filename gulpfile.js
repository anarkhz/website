var gulp = require('gulp'); // 基础库
var gulp_sync_task = require('gulp-sync-task'); // 同步
var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch')


gulp.task('less', () => {
    return gulp.src('./public/src/less/**/*.less')
        .pipe(less({
            // compress: true,
            paths: [path.join(__dirname, 'public/src/less/lib/')]   // @import 附加路径
        }))
        .pipe(gulp.dest('./public/css'));

})

gulp.task('watch-css', function () {
    gulp.watch('./public/src/less/**/*.less', ['less']);
})

gulp.task('default', gulp_sync_task('watch-css','less'))