const { src, dest } = require("gulp");
//конфигурация
const path = require("../config/path.js")
const app = require("../config/app.js")

//плагины
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const imgNewer = require("gulp-newer")
const fonter = require("gulp-fonter")
const ttf2woff2 = require("gulp-ttf2woff2")



const fonts = ()=> {
   return src(path.fonts.src) 
   .pipe(plumber({
      errorHandler: notify.onError(error => (
         {
            title: 'FONTS',
            message: error.message
            }
         ))
   })) 
   .pipe(imgNewer(path.fonts.dest)) // как фильтр, не пропускает те файлы, которые были ранее обработаны. В качестве значения путь к директории с конечными файлами
   .pipe(fonter(app.fonter))   
   .pipe(dest(path.fonts.dest)) // конечная папка. В самом конце
      .pipe(ttf2woff2())
      .pipe(dest(path.fonts.dest))
}

module.exports = fonts;