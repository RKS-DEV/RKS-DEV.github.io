function xyz() {

    var btnpin = document.getElementById('btnpin');
    btnpin.addEventListener('click', function(e) {
        $('#alrtPin2').hide('fade');
        $('#alrtPin').hide('fade');
        var pin_no = document.getElementById('pinInput').value;
        if (pin_no != '') {
            getPostPin();
        } else {
            $('#outputPin').hide();
            $('#alrtPin3').show('fade');
        }

    })
    var btnarea = document.getElementById('btnarea');
    btnarea.addEventListener('click', function(e) {
        $('#alrtArea2').hide('fade');
        $('#alrtArea').hide('fade');
        var area = document.getElementById('areaInput').value;
        if (area != '') {
            getPostArea();
        } else {
            $('#outputArea').hide();
            $('#alrtArea3').show('fade');
        }

    })
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
        $('#alrtArea').hide('fade');
    })
    $('#clsArea2').click(function() {
        $('#alrtArea2').hide('fade');
    })
    $('#clsArea3').click(function() {
        $('#alrtArea3').hide('fade');
    })

    $('#clsPin').click(function() {
        $('#alrtPin').hide('fade');
    })
    $('#clsPin2').click(function() {
        $('#alrtPin2').hide('fade');
    })
    $('#clsPin3').click(function() {
        $('#alrtPin3').hide('fade');
    })
}

// get post office by area

function getPostArea() {
    $('#outputArea').hide();
    $('#alrtArea3').hide('fade');
    var loadArea = document.getElementById('loadingArea');
    var postofficename = document.getElementById('areaInput').value;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://postalpincode.in/api/postoffice/' + postofficename);
    ourRequest.onloadstart = function(e) {
        $('#alrtArea').hide();
        $('#alrtArea2').hide();
        $('#alrtArea3').hide();
        btnarea.disabled = true;
        loadArea.style.display = 'block';
    };
    ourRequest.onloadend = function(e) {


        btnarea.disabled = false;

        loadArea.style.display = 'none';
    };
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
        $('#alrtArea2').show('fade');
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
    $('#outputArea').hide('fade');

}




// get post office by pin

function getPostPin() {
    // move();
    $('#alrtPin3').hide('fade');
    $('#outputPin').hide();
    var load = document.getElementById('loading');
    //load.style.display = "none";
    var pin_no = document.getElementById('pinInput').value;
    var progressBar = document.getElementById('progressBar');
    var display = document.getElementById('display');
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://postalpincode.in/api/pincode/' + pin_no);
    // ourRequest.setRequestHeader('Access-Control-Allow-Origin', '*');

    ourRequest.onloadstart = function(e) {
        $('#alrtPin').hide();
        $('#alrtPin2').hide();
        $('#alrtPin3').hide();
        btnpin.disabled = true;
        load.style.display = 'block';
    };
    ourRequest.onloadend = function(e) {


        btnpin.disabled = false;

        load.style.display = 'none';
    };
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

        $('#alrtPin2').show('fade');
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