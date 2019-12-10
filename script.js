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
        // console.log(todo); // check to make sure the string is saved

        //only add item to list if vairable is not empty
        //if not empty add to list (ul)
        console.log(todo.trim());
        if (todo.length > 0 && todo.trim !== ""){// BONUS what to do if people add spaces
            //create a variable that holds new HTML
            const item = `
                <li>
                    <span class="check todo"></span>${todo}
                    <i class="fa fa-times"></i>
                </li>`;
            //add const item into the ul
            $('ul').append(item);
            //clear text inside input after sumbit is clicked
            $input.val('');
            // this.reset(); //vanilla JavaScript way of resetting
        }else{
            //show error message
            $('#error').show();
        }
        $('ul').sortable();
    });

//Event listener click on click of i
    $('ul').on('click', 'li', function(){  // select ul first because li doesn't exist at page load
        //swap out todo class for done class
        //add class completed to the li

        //toggle class completed && todo and done 
        $(this).toggleClass('completed'); //li wouldn't work because it will select all the li(s)
        //this refers to the li we clicked on
        $(this).find('.check').toggleClass('todo done');
        $('this').appendTo($('ul'));
    });

//listedn for click on i to remove items
    $('ul').on('click', '.fa-times', function(){
        //grab li and remove it from the list
        $(this).parent().remove();
    });
})