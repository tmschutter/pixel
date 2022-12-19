(function(){
    var mainBox = document.getElementById('mainBox')
    var canvasBox = document.getElementById('canvasBox')

    function makeSquare(){
        var div = document.createElement('div')
        div.classList.add('pixel')
        div.addEventListener('mouseover', ColorEvt)
        return div
    }

    var mouseDown = false
    canvasBox.addEventListener('mousedown', function(e){
        mouseDown = true
    })
    document.addEventListener('mouseup', function(e){
        mouseDown = false
    })
    function ColorEvt(e){
        if (mouseDown){e.target.style.backgroundColor = currentColor}
    }

    mainBox.appendChild(pickedColor())

    function canvas(){
        let x = 0
        while (x < 1750){
            canvasBox.appendChild(makeSquare())
            x++
        }
    }
    canvas()

    function pickerBox(color){
        var div = document.createElement('div')
        div.classList.add('ui')
        div.classList.add('picker')
        div.id = `${color} picker`
        div.style.backgroundColor = color
        div.addEventListener('click', function(){
            currentColor = color
            document.getElementById('pickedColor').style.backgroundColor = color
        })
        return div
    }

    function pickedColor(){
        var div = document.createElement('div')
        div.id = 'pickedColor'
        div.className = 'ui'
        return div
    }

    var currentColor = document.getElementById('pickedColor').style.backgroundColor
    
    var colorPalette = [
        '#000000', '#404040', '#FF0000', '#FF6A00', '#FFD800',
        'yellow', '#B6FF00', '#00FF21', '#00FF90', '#00FFFF',
        '#0094FF', '#0026FF', '#4800FF', '#B200FF', '#FF00DC',
        '#FFFFFF', '#808080', '#FF006E', '#7F0000', '#7F3300',
        '#7F6A00', '#5B7F00', '#007F0E', '#007F46', '#007F7F',
        '#004A7F', '#00137F', '#21007F', '#57007F', '#7F006E']

    function palette(){
        for (let i = 0; i < colorPalette.length; i++)        
        mainBox.appendChild(pickerBox(colorPalette[i]))
    }
    palette()

    function local(){
        var saveName = document.createElement('input')
        saveName.style.width = '150px'
        saveName.type = 'text'
        saveName.style.margin = '30px'
        mainBox.appendChild(saveName)
        var saveButton = document.createElement('button')
        saveButton.style.width = '150px'
        saveButton.style.margin = '5px'
        saveButton.textContent = 'Save'
        var allPixels = canvasBox.children
        saveButton.addEventListener('click', function(){
            var colorData = []
            for (let x = 0; x < allPixels.length; x++){
                    currentBGC = allPixels[x].style.backgroundColor
                    colorData.push(currentBGC)
                }
            localStorage.setItem(saveName.value, JSON.stringify(colorData))
        })
        mainBox.appendChild(saveButton)
        
        var loadButton = document.createElement('button')
        loadButton.style.width = '150px'
        loadButton.style.margin = '30px'
        loadButton.textContent = 'Load'
        loadButton.addEventListener('click', function(){
            var loadedColors = JSON.parse(localStorage.getItem(loadSelect.value))
            for (let i = 0; i < loadedColors.length; i++){
                allPixels[i].style.backgroundColor = loadedColors[i]
            }
        })
        mainBox.appendChild(loadButton)

        var loadList = []
        for (let i = 0; i < localStorage.length; i++){
            loadList.push(localStorage.key(i))
        }

        var loadSelect = document.createElement('select')
        loadSelect.style.margin = '5px'
        loadSelect.style.width = '150px'
        for (let i = 0; i < loadList.length; i++){
            var opt = document.createElement('option')
            opt.innerHTML = loadList[i]
            opt.value = loadList[i]
            loadSelect.appendChild(opt)
        }
        mainBox.appendChild(loadSelect)

        var deleteButton = document.createElement('button')
        deleteButton.style.width = '75px'
        deleteButton.textContent = 'Delete'
        deleteButton.addEventListener('click', function(){
            localStorage.removeItem(loadSelect.value)
        })
        mainBox.appendChild(deleteButton)
    }
    local()

    // function xyLocation(){
    //     var xyCoord = document.createElement('p')
    //     xyCoord.style.fontSize = '20pt'
    //     xyCoord.style.margin = '30px'
    //     xyCoord.textContent = ','
    //     mainBox.appendChild(xyCoord)
    //     canvasBox.addEventListener('mouseover', function(){

    //     })
    // }
    // xyLocation()
})()