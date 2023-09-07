const api = `http://localhost:3000/articles`
fetch(api).then((data)=>{
return data.json()
}).then((data)=>{
    get(data)
}).catch(console.error())

 function get (data) {
     const ul = document.querySelector(`ul`)
     data.forEach((e)=>{
        const li = document.createElement(`li`)
        const p = document.createElement(`p`)
        const p2 = document.createElement(`p`)
        const a = document.createElement(`a`)
        const frag =document.createDocumentFragment()
        p.textContent=`Title: ${e.title}`
        p2.textContent=`Author: ${e.author}`
        a.textContent=`read more`
        a.href=`#`
        frag.appendChild(p)
        frag.appendChild(p2)
        frag.appendChild(a)
        li.appendChild(frag)
        ul.appendChild(li)
        ul.style.listStyle=`none`
        
    })
}