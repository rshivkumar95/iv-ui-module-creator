#!/usr/bin/env node
'use strict';

var fs = require('fs');
var CURR_DIR = process.cwd();

if(process.argv.length < 3) {
    showError();
}
else {
    var moduleName = readModuleName();
    if(moduleName) {
        createModules(moduleName);
    }
    else {
        console.log('Only - allowed in module name');
    }
}

function readModuleName() {
    let moduleName = '';
    for (let j = 2; j < process.argv.length; j++) {  
        if(isValidName(process.argv[j])){
            moduleName += process.argv[j];
            if(j < process.argv.length - 1) {
                moduleName += '-';
            }
        }
        else {
            return;
        }
    }
    return moduleName;
}

function showError(){
    console.log('Error :: No Module Name Found');
    console.log('Usage :: generate-module [module-name]');
}

function createModules(moduleName) {
    console.log('----------------------------------------');
    console.log('CREATING MODULE FOR YOU');
    console.log('----------------------------------------');
    const templatePath = `${__dirname}/template/module-template/`;
    // Create Main Module
    var dirStructure = getDirectoryStructure();
    console.log(` :: Started ${moduleName} ::`);
    fs.mkdirSync(`${CURR_DIR}/${moduleName}`);
    CURR_DIR = `${CURR_DIR}/${moduleName}`;
   // console.log('Current ::' + CURR_DIR);
    createDirectoryContents(templatePath, moduleName);
    parseDirStructure(dirStructure.subdir, templatePath);
    console.log(` :: ${moduleName} Created Successfully ::`);
    console.log('----------------------------------------');

}

function parseDirStructure(subdir, templatePath){
    for(let d of subdir){
        var parentPath = templatePath + d.dirname;
        var currentParentPath = CURR_DIR + '/'+d.dirname;
        //console.log('dirname ::'+d.dirname, 'new path ::' + parentPath, ' Current :: '+currentParentPath);
        fs.mkdirSync(currentParentPath);
        createDirectoryContents(parentPath, currentParentPath);
        console.log(`-- created ${d.dirname} --`);
        if(d.subdir){
          for(let d1 of d.subdir) {
            var newPath = parentPath + '/' +d1.dirname;
            var currentNewPath = currentParentPath + '/' +d1.dirname;
             //console.log('dirname :: '+d1.dirname, ' newPath :: '+ newPath, ' Cuurent :: '+currentNewPath);
             fs.mkdirSync(currentNewPath);
             createDirectoryContents(newPath, currentNewPath);
             console.log(`-- created ${d1.dirname} --`);
          }
        }
      }
}

function createDirectoryContents (templatePath, newProjectPath) {
    const filesToCreate = fs.readdirSync(templatePath);
  
    filesToCreate.forEach(file => {
      const origFilePath = `${templatePath}/${file}`;
      
      // get stats about the current file
      const stats = fs.statSync(origFilePath);
  
      if (stats.isFile()) {

        var contents = fs.readFileSync(origFilePath, 'utf8');
        file = file.replace('module-template',readModuleName());
        const writePath = `${newProjectPath}/${file}`;
        //console.log(contents);
        contents = contents.replace(/module-template/g, readModuleName());
        contents = contents.replace(/ModuleTemplate/g, makeUpperCaseModuleName());
        fs.writeFileSync(writePath, contents, 'utf8');
      }
    });
  }

  function getDirectoryStructure(){
      return {
          dirname: "module-template",
          subdir: [{
              dirname: "js",
              subdir: [{
                      dirname: "config"
                  },
                  {
                      dirname: "controller"
                  },
                  {
                      dirname: "model"
                  },
                  {
                      dirname: "usecase-service"
                  },
                  {
                      dirname: "view"
                  }
              ]
          }, 
          {
            dirname: "less",
          },
          {
            dirname: "template",
          }]
      };
  }

function makeUpperCaseModuleName(){
    var moduleName = readModuleName();
    if(moduleName.indexOf('-') > -1) {
        var names = moduleName.split('-');
        var newModuleName = '';
        for(let name of names){
            newModuleName += name.charAt(0).toUpperCase() + name.slice(1);
        }
        return newModuleName;
    }
    else {
        return moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
    }
}

function isValidName(name){
    var format = /[ !@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]/;
    return !format.test(name);
}