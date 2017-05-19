// ####################################################################

$('.play').on('click', function() {
    document.querySelector('.player').play();
    $('.play').hide();
    $('.pause').show();
});
$('.pause').on('click', function() {
    document.querySelector('.player').pause();
    $('.pause').hide();
    $('.play').show();
});
$('.player').on('timeupdate', function() {
    $('.seekbar').attr("value", this.currentTime / this.duration);
});

// ####################################################################

$('.play1').on('click', function() {
    document.querySelector('.player1').play();
    $('.play1').hide();
    $('.pause1').show();
});

$('.pause1').on('click', function() {
    document.querySelector('.player1').pause();
    $('.pause1').hide();
    $('.play1').show();
});
$('.player1').on('timeupdate', function() {
    $('.seekbar1').attr("value", this.currentTime / this.duration);
});

// ####################################################################

$('.play2').on('click', function() {
    document.querySelector('.player2').play();
    $('.play2').hide();
    $('.pause2').show();
});

$('.pause2').on('click', function() {
    document.querySelector('.player2').pause();
    $('.pause2').hide();
    $('.play2').show();
});
$('.player2').on('timeupdate', function() {
    $('.seekbar2').attr("value", this.currentTime / this.duration);
});

// ####################################################################









function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

$(".imgInp").change(function(){
    readURL(this);
});

document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value;
};

