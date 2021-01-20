const { exec } = require("child_process");
const util = require('util');
const fs = require('fs');
const fse = require('fs-extra');


let env = process.env.NODE_ENV ;

console.log('env ',env.NODE_ENV);

let configFile = '';

console.log(' -------------------------------------------- ');
console.log('set env ',env,'-------------------------------');
console.log(' -------------------------------------------- ');
if(env === 'production'){
    configFile = 'tsconfig-prod.json';
    fse.remove('./dist/basic_express_app_release');
}
else
{
    fse.remove('./dist/basic_express_app');
}

exec("tsc --build "+configFile, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }

    if(env === 'production'){
        fs.copyFileSync('./package-prod.json','./dist/basic_express_app_release/package.json');
        fs.copyFileSync('./src/app,prod.ini','./dist/basic_express_app_release/app.ini');
        fse.copySync('./src/views','./dist/basic_express_app_release/views');
        fse.copySync('./src/public','./dist/basic_express_app_release/public');
    }
    else
    {
        fs.copyFileSync('package.json','./dist/basic_express_app/package.json');
        fs.copyFileSync('./src/app.ini','./dist/basic_express_app/app.ini');
        fse.copySync('./src/views','./dist//basic_express_app/views');
        fse.copySync('./src/public','./dist/basic_express_app/public');
    }
    
    

    if(!!stdout){
        console.log(`stdout: ${stdout}`);
    }

    console.log('complete');
});