import showdown from 'showdown';

const classMap = {
    h1: 'head1',
    h2: 'head2',
    h3: 'head3',
    h4: 'head4',
    h5: 'head5',
    h6: 'head6',
    ul: 'list',
    li: 'item'
};
  
const bindings = Object.keys(classMap)
    .map(key => ({
      type: 'output',
      regex: new RegExp(`<${key}(.*)>`, 'g'),
      replace: `<${key} class="${classMap[key]}" $1>`
}));
  
const conv = new showdown.Converter({
    extensions: [...bindings]
});