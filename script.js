$(document).ready(function () {
    //auto focus upon page load
    $('input[type=text').focus();

    //Event listener Submit
    $('form').on('submit', function(e){
        //by default when you submit a form it will refresh teh page
        //e = event
        e.preventDefault(); //e.preventDefault will stopo the page from refreshing on submit
        // console.log('form was submitted'); //check to make sure form was submitted

        const $input = $('input[type=text]');
        
        const todo = $input.val(); // saving string that was typed when submit is fired
        console.log(todo); // check to make sure the string is saved
    })
})