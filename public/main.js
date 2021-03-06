let pageNumber = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest
    request.open('GET', `/page${pageNumber+1}.json`)
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const array = JSON.parse(request.response);
                array.forEach(item => {
                  const li = document.createElement("li");
                  li.textContent = item.id;
                  xxx.appendChild(li);
                });
                pageNumber ++
            }else{
                alert('加载下一页失败')
            }
        }
    }
    request.send()
}
getJSON.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                console.log(request.response)
                const object = JSON.parse(request.response)
                console.log(object)
            }else{
                alert('加载JSON失败')
            }
        }
    }
    request.send()
}
getXML.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                // request.responseXML 是一个dom对象
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }else{
                alert('加载XML失败')
            }
        }
    }
    request.send()
}


getHTML.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () =>{
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () =>{
        console.log('加载HTML失败了')
    }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onload = () =>{
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    } 
    request.onerror= () =>{
        console.log('加载JavaScript失败了')
    } 
    request.send()
}

getCSS.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onload = () =>{
        console.log('request.response:')
        console.log(request.response)
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
    }
    request.onerror = () =>{
        console.log('加载CSS失败了')
    }
    request.send()
}