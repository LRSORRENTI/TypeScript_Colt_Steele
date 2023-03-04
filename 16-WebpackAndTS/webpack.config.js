
const path = require("path");

module.exports = {
  mode: "development",
  // The above will fix the error message after 
  // running npm run build, where it's saying no 
  // mode has been set yet, please set mode to development 
  // or production

// As a note, once we switch the above to 
// mode: "production", everything goes back to being 
// fully bundled in that huge bundle.js style, 
// but in mode: development it looks normal, 
// more normal in a code readability sense 


    // first is the entry point below, 
    // and what the entry point does is 
    // allow us to specify the entry point for 
    // bundling, in our case it's the index.ts 
    // file in the src directory  
    entry: "./src/index.ts",
    // Then below we add module {} and 
    // inside of module, we add a rules array
    // and the rules array will help webpack know 
    // what to do when it encounters js files, or 
    // sass files, or static assets etc.. 
    devtool: "inline-source-map",
    // the above is how we set the source map, 
    // which will take that bundle, map it backwards 
    // to it's pre-bundled state
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            // the above looks strange so 
            // let's break it down peice by peice, 
            // the '$' means this pattern must come 
            // at the end of a file, and the '?' 
            // is in case were using tsx, otherwise 
            // it's just ts were using, the '?' is 
            // ignored, then if that file is found, 
            // like a TS file, below we tell 
            // webpack what to use 
            use: "ts-loader",
            // and we're going to use ts-loader,
            // from those dependencies we installed 
            // earlier if you remember, then we also 
            // add exclude
            exclude: /node_modules/,
            // and the reason to exclude node modules 
            // is because it usually has a lot of TS 
            // files, we don't want it to load 
            // all of those 
          },
        ],
    },
    // then we add resolve, and the types of 
    // files we want webpack to resolve
    resolve: {
        extensions: [".tsx", ".ts", ".js" ],
    },
    // then we need to include the output, 
    // and we need to use that path.resolve 
    // that we brought in at the top with const path 
    // and the path.resolve, the first arg is 
    // saying put it in this current directory, 
    // and the second arg is saying, then put 
    // it in the dist folder of that directory
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist",
    },
  
};