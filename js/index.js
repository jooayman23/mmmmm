/// <reference types="../@types/jquery/" />


$('#joo').animate({height:'100vh' },1000)
    $('h1').fadeIn(1000,function () {
       $('h2').fadeIn(1000,function () {
        $('h4').fadeIn(2000,function () {
            $('span').fadeIn(1000,function () {
                $('.col-md-4').slideDown(1000,function () {
                    $('p').fadeIn(2000)
                })
            })
        })
       })
    })


