# Editor

Editor is a responsive HTML/CSS/JS code editor that renders the code you type in real-time. 

<img src="https://github.com/stableapple/editor/blob/main/screenshot/new.png" >


Try it here: [Demo](https://uujzf.csb.app/)

## Installation

1. Clone the repository
2. cd into ```editor``` and run ```npm install```

```
  npm install
```
3. Run `npm start` to run this on your local server. This opens port `3000`.

```
  npm start
```

## Run tests

- The test setup is done using Jest and Enzyme. Read more about it:
 [Enzyme Docs](https://enzymejs.github.io/enzyme/)

```
npm run test
```

## Package and Interfaces

- [AceEditor](https://www.npmjs.com/package/react-ace)
- [Create Object URL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL)
- [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)



## Features

- Live syntax checker which checks and displays syntax errors.
- Download the code as .html,.css and  .js file
- Auto completion enabled as default
- Syntax Highlighting
- Resizable Code/Preview Pane


## Browser Support

Editor works in all modern web browsers and IE10+.