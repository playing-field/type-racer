$('#type').attr('placeholder','Type the above text Here');


$('textarea').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur corporis quos sunt. B' +
    'landitiis distinctio, eligendi, i d molestias nihil numquam obcaecati odit placligendi, i d molestias nihil numquam obcaecati odit placeat quidem quo ratione,ligendi, i d molestias nihil numquam obcaecati odit placeat quidem quo ratione,eat quidem quo ratione, sunt tempore'+
    'd molestias nihil numquam obcaecati odit placeat quidem quo ratione, sunt tempore totam voluptas?');




var text = $('textarea').text();

var words = text.split(" ");

var totolChars=0;
words.forEach(value => {
   totolChars+=value.length;

})

// console.log(totolChars); find  total characters


var i=0;
var bool=false;
var typedTotalChars=0;



$('#type').on('input',output);
function output(event){
    // console.log($('#type').val());  //This will take the current input
    // console.log(event.originalEvent.data); //This will return the key which pressed

    /*if(event.originalEvent.data===" "){  //This will check whether space is pressed
        console.log('space');
    }*/

    $('main').children('h1:last-child').remove();


    $('#type').removeClass('is-invalid');


    var regex=('/^'+words[i]+'$/');
    if(!regex.match($('#type').val())){
        $('#type').addClass('is-invalid');
    }





    if(bool){
        if(event.originalEvent.data===" "){  //This will check whether space is pressed
            $('#type').val('');
            bool=false;

            if(i===0){
                $('#type').attr('placeholder','');  //This will clear the placeholder after first word type correctly.
            }

            $('#type').removeClass('is-invalid');

            typedTotalChars+=words[i].length;
            setProgressBar();
            i++;
        }
    }


    bool=false;


    if($('#type').val()===words[i]){
        bool=true;
    }

}







function setProgressBar(){

    var value=Math.ceil(typedTotalChars/totolChars*100);

    $('.progress-bar').css('width',value+'%');
}


$("#type").prop("disabled", true);



setTimeout(function (){
    $("#type").prop("disabled", false);
    $('#type').focus();
},3000);






var intId;

var j=1;
intId=setInterval(function (){
    switch (j){

        case 1:$('#countdown').children('div:first-child').addClass('invisible');
            $('#countdown').children('div:nth-child(2)').removeClass('invisible');
            break;
        case 2:$('#countdown').children('div:nth-child(2)').addClass('invisible');
            $('#countdown').children('div:nth-child(3)').removeClass('invisible');
            break;

        case 3:$('#countdown').children('div:nth-child(3)').addClass('invisible');
                $('main').append($('<h1 id="go" style="color: red; font-size: 60px" class="animate__animated animate__zoomIn">GO!!</h1>'))
                break;
    }

    j++;

},1000);




setTimeout(function (){
    clearInterval(intId);

},3000);













// $('.progress-bar').attr('aria-valuenow',34);












