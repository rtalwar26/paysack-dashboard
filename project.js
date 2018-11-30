const fs = require("fs");
const packageConfig = JSON.parse(fs.readFileSync("./package.json","utf8"));
const isProduction = process.env.NODE_ENV && (process.env.NODE_ENV.trim() === 'production');
const isGithubPublish = process.env.GITHUB_PUBLISH && (process.env.GITHUB_PUBLISH.trim() === 'true');
const project_name = "marko-starter"
console.log(process.env.NODE_ENV.trim());
console.log('isGithubPublish',isGithubPublish);
module.exports = require("marko-starter").projectConfig(isGithubPublish ? {
  name: project_name, // Optional, but added here for demo purposes
  lassoConfig: {
    outputDir: "dist/static",
    bundlingEnabled: false,
    fingerprintsEnabled: false,
    urlPrefix:`${packageConfig.baseurl || ""}/static`,    
    minifyJS: false,
    plugins: [
        'lasso-marko'
    ]
}
} : {
  name: project_name, // Optional, but added here for demo purposes
});
