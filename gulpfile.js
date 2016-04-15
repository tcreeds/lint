var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    babel = require("gulp-babel"),
    notify = require("gulp-notify");

gulp.task("default", function(){
    gulp.src("js/*")
    .pipe( babel({ presets:["es2015"]}))
    .on("error", logError)
    .pipe( uglify() )
    .pipe( rename( function(path){
        path.basename += ".min";
    }))
    .pipe(gulp.dest("dist/"))
    .pipe( notify({
        message: "Build Complete.",
        onLast: true
    }))
    
    
})

gulp.task("watch", function(){
    gulp.watch("js/*", function(){
        gulp.run("default");  
    })
})

function logError(error)
{
    console.log(error);
    this.emit('end');
    console.log("Watching...");
}