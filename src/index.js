import _ from 'lodash'

const component = () => {
  const element = document.createElement('div')
  const array = ['Hello', 'webpack!!', 'From JS']
  // CDNから利用するlodashは、最初からアンスコで利用できる。
  // array配列を半角スペースで連結。
  element.innerHTML = _.join(array, ' ')
  return element
}

document.body.appendChild(component())
