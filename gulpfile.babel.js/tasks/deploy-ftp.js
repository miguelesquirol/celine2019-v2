var user = process.env.FTP_USER
var password = process.env.FTP_PWD
var host = 'your hostname or ip address'
var port = 21
var localFilesGlob = ['./**/*']
var remoteFolder = '/myApp'

function getFtpConnection() {
    return ftp.create({
        host: host,
        port: port,
        user: user,
        password: password,
        parallel: 5,
        log: gutil.log,
    })
}
gulp.task('ftp-deploy', function() {
    var conn = getFtpConnection()
    return gulp.src(localFilesGlob, { base: '.', buffer: false }).pipe(conn.newer(remoteFolder)) // only upload newer files
        .pipe(conn.dest(remoteFolder))
})
