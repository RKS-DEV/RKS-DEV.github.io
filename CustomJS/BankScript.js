function xyz() {

    var x = document.getElementById('ifscInput');
    x.addEventListener('keydown', function(event) {
        if (event.keyCode == 13) {
            document.getElementById('btnifsc').click();
        }
    })

    var y = document.getElementById('micrInput');
    y.addEventListener('keydown', function(event) {
        if (event.keyCode == 13) {
            document.getElementById('btnmicr').click();
        }
    })
    $('#clsifsc').click(function() {
        $('#alrtifsc').hide();
    })

    $('#clsmicr').click(function() {
        $('#alrtmicr').hide();
    })
}

// get banks details by ifsc code

function getIfscInfo() {

    var IFSC = document.getElementById('ifscInput').value;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://api.techm.co.in/api/v1/ifsc/' + IFSC);
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            if (ourData.status != "failure") {

                createHtmlifsc(ourData);
            } else {

                warnIfsc();
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

function createHtmlifsc(serverData) {
    console.log(serverData);
    $('#outputIfsc').show();
    var rawTemplate = document.getElementById('rawTemplateIfsc').innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var generatedTemplate = compiledTemplate(serverData);

    $('#alrtifsc').hide();

    var reslt = document.getElementById('outputIfsc');
    reslt.innerHTML = generatedTemplate;

}

function warnIfsc() {
    $('#alrtifsc').show('fade');

    $('#outputIfsc').hide();

}




// get banks details by micr code

function getMircInfo() {
    // move();
    var MICR = document.getElementById('micrInput').value;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://api.techm.co.in/api/v1/micr/' + MICR);
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            if (ourData.status != "failure") {

                createHtmlmicr(ourData);
            } else {

                warnMicr();
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

function createHtmlmicr(serverData) {
    console.log(serverData);
    $('#outputMicr').show();
    var rawTemplate = document.getElementById('rawTemplateIfsc').innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var generatedTemplate = compiledTemplate(serverData);

    $('#alrtmicr').hide();

    var reslt = document.getElementById('outputMicr');
    //  $("#outputMicr").delay(4000).fadeIn();
    reslt.innerHTML = generatedTemplate;

}

function warnMicr() {
    $('#alrtmicr').show('fade');

    $('#outputMicr').hide();

}

//progress bar 

function move() {
    //document.getElementById('indicator').style.color = "green";
    var prog = document.getElementById('pcontent');
    var width = 0;
    var id = setInterval(frame, 20);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width = width + 10;
            prog.style.width = width + "%";
            if (width > 90) {
                document.getElementById('indicator').innerText = "Success";
            } else {
                ocument.getElementById('indicator').innerText = width * 1 + "%";
            }

        }
    }
}