import _ from 'lodash'
// import style from './style.css'
import './style.css' // styleの取り込みはファイル名のみでOK。

// console.log(style)

/*
import { NiJou, NAME } from './utilities'
console.log(NiJou(9))
console.log(NAME)
 */

/*
import * as utilities from './utilities'
console.log(utilities.NiJou(5))
console.log(utilities.NAME)
 */

/*
import Lion, { NAME as NAME_OF_HIM } from './utilities'
console.log(NAME_OF_HIM)
console.log(Lion.say())
 */

// default のimport名は自由に設定できる。
/*
import Tiger from './utilities'
console.log(Tiger.say())
 */

 const component = () => {
  const element = document.createElement('div')
  const array = ['Hello', 'webpack!!', 'From JS']
  // CDNから利用するlodashは、最初からアンスコで利用できる。
  // array配列を半角スペースで連結。
  element.innerHTML = _.join(array, ' ')
  return element
}

document.body.appendChild(component())
// HTMLのbodyに'haikei'クラスを登録。
document.body.classList.add('haikei')
