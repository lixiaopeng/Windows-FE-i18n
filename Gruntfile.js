'use strict';

var fs = require('fs');
var util = require('util');

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var pathConfig = {
        app : 'app',
        dist : 'dist',
        tmp : 'tmp'
    };

    grunt.initConfig({
        paths : pathConfig,
        clean : {
            dist : ['<%= paths.tmp %>/', '<%= paths.dist %>/']
        },
        copy : {
            tmp : {
                files : [{
                    expand : true,
                    dot : true,
                    cwd : '<%= paths.app %>',
                    dest : '<%= paths.tmp %>',
                    src : [
                        'images/**/*.{png,gif}',
                        'stylesheets/**/*.{sass,scss,png,ttf}'
                    ]
                }]
            },
            nls : {
                files : [{
                    expand : true,
                    dot : true,
                    cwd : '<%= paths.tmp %>',
                    dest : '<%= paths.dist %>',
                    src : [
                        'i18n/**/*.js',
                    ]
                }]
            },
            dist : {
                files : [{
                    expand : true,
                    dot : true,
                    cwd : '<%= paths.tmp %>',
                    dest : '<%= paths.dist %>',
                    src : [
                        'i18n/**/stylesheets/{,*/}*.{css,ttf}'
                    ]
                }]
            }
        },
        compass : {
            options : {
                sassDir : '<%= paths.tmp %>/stylesheets/compass/sass',
                cssDir : '<%= paths.tmp %>/stylesheets',
                imagesDir : '<%= paths.tmp %>/stylesheets/compass/images',
                generatedImagesDir : '<%= paths.tmp %>/images',
                relativeAssets : true
            },
            dist : {
                options : {
                    outputStyle : 'compressed'
                }
            }
        },
        imagemin : {
            dist : {
                files : [{
                    expand : true,
                    cwd : '<%= paths.tmp %>/images',
                    src : '**/*.{png,jpg,jpeg}',
                    dest : '<%= paths.dist %>/images'
                }]
            }
        }
    });

    var deleteFolderRecursive = function(path) {
        if( fs.existsSync(path) ) {
            fs.readdirSync(path).forEach(function(file,index){
                var curPath = path + "/" + file;
                if(fs.statSync(curPath).isDirectory()) {
                    deleteFolderRecursive(curPath);
                } else {
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(path);
        }
    };

    var runSubTask = function (command) {
        var exec = require('child_process').exec;

        exec(command, function (error, stdout, stderr) {
            if (stdout) {
                console.log('stdout: ' + stdout);
            }

            if (stderr) {
                console.log('stderr: ' + stderr);
            }

            if (error) {
                console.log('exec error: ' + error);
            }
        });
    };

    grunt.registerTask('processI18n', function (nls) {

        deleteFolderRecursive(pathConfig.dist + '/i18n/' + nls);

        var i18nPath = pathConfig.tmp + '/i18n';
        fs.mkdirSync(i18nPath);

        var i18nNlsPath = i18nPath + '/' + nls;
        fs.mkdirSync(i18nNlsPath);

        i18nNlsPath += '/nls';
        fs.mkdirSync(i18nNlsPath);
        fs.mkdirSync(i18nNlsPath + '/' + nls);

        var content;
        var template = util.format('define({"%s" : true});', nls);
        fs.readdirSync(pathConfig.app + '/nls/' + nls).forEach(function (file) {
            if (file.substr(0, 1) === '.') {
                return;
            } else {
                grunt.file.write(i18nNlsPath + '/' + file, template);
            }
        });
        runSubTask('cp -r ' + pathConfig.app + '/nls/' + nls + ' ' + i18nNlsPath);

        var fd;
        if (nls !== 'zh-cn') {
            var mainScss = pathConfig.tmp + '/stylesheets/compass/sass/main.scss';
            fd = fs.openSync(mainScss, 'a');

            fs.writeSync(fd, '@import "_locale-' + nls + '.scss"');
            fs.closeSync(fd);
        }
    });

    grunt.registerTask('copyCss', function (nls) {

        var stylePath = pathConfig.tmp + '/i18n/' + nls + '/stylesheets';
        fs.mkdirSync(stylePath);
        fs.readdirSync(pathConfig.tmp + '/stylesheets/').forEach(function (file){
            if (file.substr(0, 1) === '.' || file === 'compass') {
                return;
            } else {
                runSubTask('cp ' + pathConfig.tmp + '/stylesheets/' + file + ' ' + stylePath);
            }
        });
    });

    grunt.registerTask('createScssConfig', function (project) {

        var filePath = pathConfig.tmp + '/stylesheets/compass/sass/_projectflag.scss';
        var content = '';
        switch (project) {
        case 'WDJ':
            content = '$PROJECT_FLAG : PROJECT_WD';
            break;
        case 'SUNING':
            content = '$PROJECT_FLAG : PROJECT_SUNING';
            break;
        case 'TIANYIN':
            content = '$PROJECT_FLAG : PROJECT_TIANYIN';
            break;
        }

        grunt.file.write(filePath, content);
    });

    grunt.registerTask('mvImageMin', function (nls) {
        runSubTask('mv ' + pathConfig.dist + '/images/ ' + pathConfig.dist + '/i18n/' + nls + '/');
    });

    grunt.registerTask('build', function (project, nls) {

        project = project ? project.toUpperCase() : 'WDJ';
        var nlss = nls ? nls.toLowerCase().split(',') : ['zh-cn'];

        console.log('project : ', project);
        console.log('nls : ', nls);

        nlss.forEach(function (nls) {
            var taskList = [
                'clean:dist',
                'copy:tmp',
                'processI18n:' + nls,
                'createScssConfig:' + project,
                'compass:dist',
                'copyCss:' + nls,
                'copy:nls',
                'imagemin',
                'copy:dist',
                'mvImageMin:' + nls
            ];

            grunt.task.run(taskList);
        });
    });

    grunt.registerTask('test:travis', ['build']);
};
