# ace-polymer
Support polymer  ace editor

## install

- `bower init`

- `bower install --save Polymer/polymer`

- `npm install express`

- `npm install serve-static`

----
## run test

- `node app.js`

- open http://127.0.0.1:3000

## fire-ace API

- polymer element

```html
 <!--....-->
    <fire-ace name="fireace">
    </fire-ace>
 <!--....-->
```

- javascript

```javascript
    var aceEditor = this.$.fireace.editor;
    //example
    console.log(aceEditor.getValue());

```

## native ace editor API

----
http://ajaxorg.github.io/ace/#nav=api
