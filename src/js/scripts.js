(function(){
    'use strict';

    $(document).ready(function(){
        $('.promo').slick({
            arrows: false,
            autoplay: true,
            centerMode: true,
            centerPadding: '250px',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            variableWidth: true
        })
    });




    // let url = 'http://www.omdbapi.com/?apikey=[1d16610]?i=tt1285016',
    //     response = fetch('http://www.omdbapi.com/?apikey=[1d16610]?i=tt1285016'),
    //     commits = await response.json(); // читаем ответ в формате JSON
    // alert(commits[0].author.login);

    function getRandomMovie() {
        fetch('http://www.omdbapi.com/?i=tt0137523&apikey=1d16610')
        .then((res) => res.json())
        .then((film) => {
            console.log(film)
        });
    }

    getRandomMovie();
    
})()