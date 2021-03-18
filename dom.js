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
    }
}