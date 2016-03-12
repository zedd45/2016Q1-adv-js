# Installation

You need node.  You already know this.  [`nvm`](https://github.com/creationix/nvm) is preferable.

Next, open a terminal and run:

```
npm i
```

To install dependencies.

# Setup

At your terminal type:

```
npm run
```

To see a list of available commands.  The three most important are: 

1. `npm start` - starts the [`webpack`](https://webpack.github.io/) server, and compiles your code. It will watch for changes.  Just do things, save, and refresh your browser. 
2. `npm run open` - opens a browser at the port `Webpack` is currently configured to run at. 
3. `npm run build` - runs a modified `webpack` config to make your code production-ready.


# Testing

Don't forget to do `npm run jasmine-init`.  Add your tests and make sure you are reading from the `dist` folder (aka the compiled version). 

I've chosen [`gulp-jasmine-browser`](https://github.com/jasmine/gulp-jasmine-browser), in part because [a cohort of mine](https://github.com/robr24) in teaching `gulp` the same quarter I teach this class, and also for the sake of time and convenience.  

To run tests, run: 

```
npm test
```

then open a browser at `http://localhost:8888` by typing:

```
npm run open-test
```

