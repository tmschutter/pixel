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
    canvasBox.addEventListener('mouseup', function(e){
        mouseDown = false
    })
    function ColorEvt(e){
        if (mouseDown){e.target.style.backgroundColor = currentColor}
    }

    mainBox.appendChild(pickedColor())

    function canvas(count){
        let i = 0
        while (i < count){
            canvasBox.appendChild(makeSquare())
            i++
        }
    }
    canvas(1750)

    function pickerBox(color){
        var div = document.createElement('div')
        div.className = 'ui'
        div.classList.add('picker')
        div.id = `${color} picker`
        div.style.width = '50px'
        div.style.height = '50px'
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

    var currentColor = 'black'
    
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

})()