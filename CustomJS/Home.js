$(window).load(function() {
    $(".loader").fadeOut("slow");

});

function xyz() {

    $('#qod').modal('show');
    getQuote();
    $('#submit').click(function(e) {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('comment').value;
        if (name == "" || email == "" || message == "") {
            window.alert('all fields are mandatory');

        } else {

            $.ajax({
                url: "https://formspree.io/rahul1993rks@live.com",
                method: "POST",
                data: { message: "hello" },
                dataType: "json"
            });
            //e.preventDefault();
            // $(this).get().reset();
            window.alert('name' + name);

        }
    })


}

function getQuote() {


    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://quotes.rest/qod.json');
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            if (ourData.status != "fail") {
                console.log(ourData);
                document.getElementById('imgquote').src = ourData.contents.quotes[0].background;
                document.getElementById('quote').innerHTML = ourData.contents.quotes[0].quote;
                document.getElementById('author').innerHTML = ourData.contents.quotes[0].author;

            } else {

                warnYourIp(ourData);
            }

        } else {
            console.log('Connected to the server but something went wrong.');
        }

    };
    ourRequest.onerror = function() {
        console.log('Problem in the network.');
    }
    ourRequest.send();

}