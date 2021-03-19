const div = dom.create('<div>newDiv</div>')
// dom.wrap(test,div)

// dom.remove(test)

// const empty = dom.empty(window.test)

// console.log(empty)

// dom.attr(test,'title','hi,i')
// console.log(dom.attr(test,'title'))

// dom.text(test,'111')

// dom.style(test,{color: 'red'})
// dom.style(test,'color','red')
// console.log(dom.style(test,'color'))

// dom.class.add(test,'red')
// dom.class.remove(test,'red')
// console.log(dom.class.has(test,'red'))

// const fn = () => {
//     console.log('点击了')
// }
// dom.on(test,'click',fn)
// dom.off(test,'click',fn)

// console.log(dom.find('#test')[0])

// console.log(dom.parent(e1))

// console.log(dom.sibling(e1))

// console.log(dom.next(e1))

dom.each(dom.children(test), (n) => {
    dom.style(n,'color','red')
})

console.log(dom.index(e2))