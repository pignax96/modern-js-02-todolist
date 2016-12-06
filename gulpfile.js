//importiamo e memorizziamo Gulp
var gulp = require('gulp');

var htmlreplace = require('gulp-html-replace');

var ghPages = require('gulp-gh-pages');

//task di test
gulp.task('test', function(){
  console.log('non posso far stare zitto Giovanni, purtroppo...');
});

//spostare i file in ./dist
gulp.task('move', function(){

  var files = [
    './src/index.html',
    './src/todo.js',
    './src/bower_components/bootstrap/dist/css/bootstrap.min.css',
    './src/bower_components/font-awesome/css/font-awesome.min.css'
  ]

  gulp.src(files)
  .pipe(gulp.dest('./dist'));

});

gulp.task('move-fonts', function(){

  gulp.src('./src/bower_components/font-awesome/css/font-awesome.min.css')
  .pipe(gulp.dest('./dist/fonts'));
})

//modifica i puntamenti in index.html di ./dist/
gulp.task('update-html', ['move'], function(){

  gulp.src('./src/index.html')
    .pipe(htmlreplace({
      'bootstrap': '<link rel="stylesheet" href="bootstrap.min.css">',
      'font-awesome':'<link rel="stylesheet href="font-awesome.min.css">'
    }))
    .pipe(gulp.dest('./dist'));
});

//plugin
gulp.task('deploy', ['update-html'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
