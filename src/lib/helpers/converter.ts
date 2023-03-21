import showdown from 'showdown';

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

export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob('$lib/posts/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)
  
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = path.slice(11, -3)

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  return allPosts
}