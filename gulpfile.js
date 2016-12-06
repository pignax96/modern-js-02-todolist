
// Importiamo e memorizziamo Gulp
var gulp = require('gulp');
var htmlreplace = require('gulp-html-replace');
var ghPages = require('gulp-gh-pages');

// Task di test
gulp.task('test', function(){
  console.log('non posso far stare zitto Giovanni, purtroppo...');
});

// Sposta i file in ./dist
gulp.task('move', ['move-fonts'], function(){

  var files = [
    // './src/index.html',
    './src/todo.js',
    './src/bower_components/bootstrap/dist/css/bootstrap.min.css',
    './src/bower_components/font-awesome/css/font-awesome.min.css'
  ];

  gulp.src(files)
    .pipe(gulp.dest('./dist'));

});

// Sposta tutti i fonts
gulp.task('move-fonts', function(){

  gulp.src('./src/bower_components/font-awesome/fonts/*.*')
    .pipe(gulp.dest('./dist/fonts'));

});

// Modifica i puntamenti in index.html di ./dist/
gulp.task('update-html', ['move'], function(){

  gulp.src('./src/index.html')
    .pipe(htmlreplace({
      'bootstrap': '<link rel="stylesheet" href="bootstrap.min.css">',
      'fontawesome': '<link rel="stylesheet" href="font-awesome.min.css">'
    }))
    .pipe(gulp.dest('./dist'));

});

gulp.task('deploy',['update-html'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
