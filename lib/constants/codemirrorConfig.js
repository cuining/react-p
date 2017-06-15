'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var options = exports.options = {
  value: '',
  mode: 'jsx',
  theme: 'react',
  keyMap: 'sublime',
  indentUnit: 2,
  lineNumbers: true,
  dragDrop: false,
  showCursorWhenSelecting: true,
  autoCloseBrackets: true,
  matchTags: {
    bothTags: true
  },
  extraKeys: {
    'Tab': 'indentMore',
    'Cmd-/': function Cmd(cm) {
      cm.listSelections().forEach(function (selection) {
        cm.toggleComment({ lineComment: '//' });
      });
    }
  }
};

var requireAddons = exports.requireAddons = function requireAddons() {
  require('codemirror/mode/jsx/jsx');
  require('codemirror/keymap/sublime');
  require('codemirror/addon/fold/xml-fold' // required for matchtags
  );require('codemirror/addon/edit/matchtags');
  require('codemirror/addon/edit/closebrackets');
  require('codemirror/addon/comment/comment');
  require('codemirror/addon/selection/active-line');
};