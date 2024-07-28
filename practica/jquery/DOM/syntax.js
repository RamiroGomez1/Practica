$( () => {

    /*
    $("#dom").click(()=>{
        alert($('#p1').text())
        alert($('#p2').text())
        alert($('#val').text())
    })

    $("#domModificado").click(()=>{
        $('#p1').text('Contenido del parrafo 1')
        $('#p2').text('Contenido del parrafo 2')
        $('#val').text('Contenido del input')
        alert($('#p1').text())
        alert($('#p2').text())
        alert($('#val').text())
 
    })

    $("#modificarEnlace").click(()=>{
        $('#enlace').attr({
            href: 'https://youtube.com',
            title: 'youtube',
            })
            })
            */
           
           /*  Metodos
$("#dom").click(()=>{
    $('p').append('Metodo append')
})

$("#dom2").click(()=>{
    $('ol').append('<li>Metodo append</li>')
})

$("#dom3").click(()=>{
    $('p').prepend('Metodo append')
})

$("#dom4").click(()=>{
    $('ol').prepend('<li>Metodo append</li>')
})

$("#dom5").click(()=>{
    $('p').after('Metodo append')
})

$("#dom6").click(()=>{
    $('p').after('<li>Metodo append</li>')
})

*/

/* Remove, empty, addClass, removeClass 

$("#dom").click(()=>{
    $('div').addClass('div1')   
})

$("#dom2").click(()=>{
    $('div').removeClass('div1')   
})
*/

/* Css

$("#dom").click(()=>{
    $('div').css({
        'background-color':'green',
        'font-size':'2em',
        'color':'yellow'
    })
})

*/

/* Parent, parents, css, ParentsUntil 

$("#dom").click(()=>{
    
    $('span').parentsUntil().css({
        'border':'1px solid red',
        'color':'red'
    })
*/
    
/* Children, find
$("#dom").click(()=>{
    $('div').children('p:first').css({
        'border':'1px solid red',
        'color':'red'
    })
*/

$("#dom").click(()=>{
    $('div').find('*').css({
        'border':'1px solid red',
        'color':'red'
    })




    
})






})