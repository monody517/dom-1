window.dom = {
    create(string){ //创建一个节点
        const container = document.createElement('template')
        container.innerHTML = string.trim();
        return container.content.firstChild
    },
    after(node,node2){ //创建一个弟弟节点
        node.parentNode.insertBefore(node2,node.nextSibling)
    },
    before(node,node2){ // 创建一个哥哥节点
        node.parentNode.insertBefore(node2,node)
    },
    append(parent,node){ //加入一个字节点
        parent.appendChild(node)
    },
    wrap(node,parent){ //加入一个父节点
        dom.before(node,parent)
        dom.append(parent,node)
    },
    remove(node){
        node.parentNode.removeChild(node)
        return node
    },
    empty(node){
        let arr = []
        let x = node.firstChild
        while(x){
            arr.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return arr
    },
    attr(node,name,value){
        if(arguments.length === 3){
            node.setAttribute(name,value)
        }else if(arguments.length === 2){
            return node.getAttribute(name)
        }
    },
    text(node,string){
        if(arguments.length === 2){
            if('innerText' in node){
                node.innerText = string
            }else{
                node.innerContent = string
            }
        }else if(arguments.length === 1){
            if('innerText' in node){
                return node.innerText
            }else{
                return node.innerContent
            }
        }
    },
    html(node,string){
        if(arguments.length === 2){
            node.innerHTML = string
        }else if(arguments.length === 1){
            return node.innerHTML
        }
    },
    style(node,name,value){
        if(arguments.length === 3){
            node.style[name] = value
        }else if(arguments.length === 2){
            if(typeof name === 'string'){
                return node.style[name]
            }else if(name instanceof Object){
                for(let key in name){
                    node.style[key] = name[key]
                }
            }
        }  
    },
    class: {
        add(node,className){
            node.classList.add(className)
        },
        remove(node,className){
            node.classList.remove(className)
        },
        has(node,className){
            return node.classList.contains(className)
        }
    },
    on(node,eventName,fn){
        node.addEventListener(eventName,fn)
    },
    off(node,eventName,fn){
        node.removeEventListener(eventName,fn)
    },
    find(selector,scope){
        return (scope ||document).querySelectorAll(selector)
    },
    parent(node){
        return node.parentNode
    },
    children(node){
        return node.children
    },
    sibling(node){
        return Array.from(node.parentNode.children).filter(n=>n!==node)
    },
    next(node){
        let x = node.nextSibling
        while(x && x.nodeType === 3){
            x = x.nextSibling
        }
        return x
    },
    previous(node){
        let x = node.previousSibling
        while(x && x.nodeType === 3){
            x = x.previousSibling
        }
        return x
    },
    each(nodeList,fn){
        for(let i = 0;i < nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    },
    index(node){
        const list = dom.children(node.parentNode)
        let i
        for( i = 0;i < list.length;i++){
            if(list[i] === node){
                break
            }
        }
        return i
    }
}