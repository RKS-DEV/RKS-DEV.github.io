function xyz() {

    var x = document.getElementById('areaInput');
    x.addEventListener('keydown', function(event) {
        if (event.keyCode == 13) {
            document.getElementById('btnarea').click();
        }
    })

    var y = document.getElementById('pinInput');
    y.addEventListener('keydown', function(event) {
        if (event.keyCode == 13) {
            document.getElementById('btnpin').click();
        }
    })
    $('#clsArea').click(function() {
        $('#alrtArea').hide();
    })

    $('#clsPin').click(function() {
        $('#alrtPin').hide();
    })
}

// get post office by area

function getPostArea() {

    var postofficename = document.getElementById('areaInput').value;
    var ourRequest = new XMLHttpRequest();

    ourRequest.open('GET', 'http://postalpincode.in/api/postoffice/' + postofficename);
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            if (ourData.Status != "Error") {

                createHtmlArea(ourData);
            } else {

                warnArea(ourData);
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

function createHtmlArea(serverData) {
    console.log(serverData);
    $('#outputArea').show();
    var rawTemplate = document.getElementById('rawTemplateArea').innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var generatedTemplate = compiledTemplate(serverData);

    $('#alrtArea').hide();

    var reslt = document.getElementById('outputArea');
    reslt.innerHTML = generatedTemplate;

}

function warnArea(data) {
    $('#alrtArea').show('fade');
    $('#outputArea').hide();

}




// get post office by pin

function getPostPin() {
    // move();
    var pin_no = document.getElementById('pinInput').value;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://postalpincode.in/api/pincode/' + pin_no);
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            if (ourData.Status != "Error") {

                createHtmlPin(ourData);
            } else {

                warnPin();
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

function createHtmlPin(serverData) {
    console.log(serverData);
    $('#outputPin').show();
    var rawTemplate = document.getElementById('rawTemplatePin').innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var generatedTemplate = compiledTemplate(serverData);

    $('#alrtPin').hide();

    var reslt = document.getElementById('outputPin');
    //  $("#outputMicr").delay(4000).fadeIn();
    reslt.innerHTML = generatedTemplate;

}

function warnPin() {
    $('#alrtPin').show('fade');

    $('#outputPin').hide();

}