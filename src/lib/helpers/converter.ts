const showdown = require('showdown');

const classMap: any = {
  h1: 'blogH1',
  h2: 'blogH2',
  h3: 'blogH3',
  h4: 'blogH4',
  h5: 'blogH5',
  h6: 'blogH6',
  ul: 'blogUl',
  li: 'blogLi'
}

const bindings = Object.keys(classMap)
  .map(key => ({
    type: 'output',
    regex: new RegExp(`<${key}(.*)>`, 'g'),
    replace: `<${key} class="${classMap[key]}" $1>`
}));

export const conv = new showdown.Converter({
  extensions: [...bindings]
});