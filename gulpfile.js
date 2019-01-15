/*
Unnie: This file is deprecated. All configs are in webpack.config.js
*/
var gulp = require("gulp");
var watch = require("gulp-watch");
var serve = require("gulp-serve");
var ts = require("gulp-typescript");
//var changed = require("gulp-cached");
var spsave = require("gulp-spsave");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function() {
 // place code for your default task here
});
gulp.task("serve", serve(["."]));// serve the current folder
gulp.task("build",CompileTypeScript);
gulp.task("deploy",UploadToSharePoint);
gulp.task("watch", function() {
    //watch(["src/script/**/*.ts"],["build"]);
    gulp.watch("scripts/**/*.ts").on("change",CompileTypeScript);
});
// This method takes the typescript settings from the tsconfig and compiles ts to js
//TODO: Reine this code to only re-compile files which are changed
function CompileTypeScript(){
    console.log("Compiling ts files");
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
}
// This method uses spsave task to upload files to sharepoint
// TODO: Change the code to hve aspx pages without the hierarchy
function UploadToSharePoint(){
    console.log("Uploading the files to SharePoint");
    gulp.src(["dist/**"]).pipe(spsave({siteUrl: "https://ecm.dev.opcw.org/sites/osdtemplate/",folder: "Administration"},null));
    return gulp.src(["views/**"]).pipe(spsave({siteUrl: "https://ecm.dev.opcw.org/sites/osdtemplate/",folder: "Administration"}, null));
}