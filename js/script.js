$('#type').attr('placeholder','Type the above text Here');


$('textarea').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur corporis quos sunt. B' +
    'landitiis distinctio, eligendi, i d molestias nihil numquam obcaecati odit placligendi, i d molestias nihil numquam obcaecati odit placeat quidem quo ratione,ligendi, i d molestias nihil numquam obcaecati odit placeat quidem quo ratione,eat quidem quo ratione, sunt tempore'+
    'd molestias nihil numquam obcaecati odit placeat quidem quo ratione, sunt tempore totam voluptas?');



var text = $('textarea').val();

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

    if(bool){
        if(event.originalEvent.data===" "){  //This will check whether space is pressed
            $('#type').val('');
            bool=false;

            if(i===0){
                $('#type').attr('placeholder','');  //This will clear the placeholder after first word type correctly.
            }

            typedTotalChars+=words[i].length;
            setProgressBar();
            i++;
        }
    }



    if($('#type').val()===words[i]){
        bool=true;
    }

}



/*value=0;
setInterval(function (){
    setProgressBar(value);
    value+=10;
},1000);*/





function setProgressBar(){

    var value=Math.ceil(typedTotalChars/totolChars*100)-1;

    $('.progress-bar').css('width',value+'%');
}









// $('.progress-bar').attr('aria-valuenow',34);












