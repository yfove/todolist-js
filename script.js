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
    })
})