function xyz() {

    var y = document.getElementById('ipInput');
    y.addEventListener('keydown', function(event) {
        if (event.keyCode == 13) {
            document.getElementById('btnip').click();
        }
    })
    $('#clsYourIp').click(function() {
        $('#alrtAYourIp').hide();
    })

    $('#clsFindIp').click(function() {
        $('#alrtFindIp').hide();
    })

    getYourIp();
}

// get your ip details

function getYourIp() {


    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://ip-api.com/json');
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            if (ourData.status != "fail") {
                createHtmlYourIp(ourData);
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

function createHtmlYourIp(serverData) {
    console.log(serverData);
    $('#outputYourIp').show('fade');
    var rawTemplate = document.getElementById('rawTemplateYourIp').innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var generatedTemplate = compiledTemplate(serverData);

    $('#alrtYourIp').hide();
    var reslt = document.getElementById('outputYourIp');
    reslt.innerHTML = generatedTemplate;
    document.getElementById('query').innerHTML = serverData.query;
    document.getElementById('city').innerHTML = serverData.city;
    document.getElementById('country').innerHTML = serverData.country;

    document.getElementById('isp').innerHTML = serverData.isp;
    document.getElementById('regionName').innerHTML = serverData.regionName;
    document.getElementById('timezone').innerHTML = serverData.timezone;
    document.getElementById('isp').innerHTML = serverData.isp;



}

function warnYourIp(data) {
    $('#alrtYourIp').show('fade');
    $('#outputYourIp').hide();

}



// search an ip details

function getIpDetails() {
    var IP = document.getElementById('ipInput').value;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://ip-api.com/json/' + IP);
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);

            if (ourData.status != "fail") {
                createHtmlFindIp(ourData);
            } else {

                warnFindIp(ourData);
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

function createHtmlFindIp(serverData) {
    console.log(serverData);
    $('#outputFindIp').show('fade');
    var rawTemplate = document.getElementById('rawTemplateFindIp').innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var generatedTemplate = compiledTemplate(serverData);

    $('#alrtFindIp').hide();
    var reslt = document.getElementById('outputFindIp');
    reslt.innerHTML = generatedTemplate;
    document.getElementById('queryf').innerHTML = serverData.query;
    document.getElementById('cityf').innerHTML = serverData.city;
    document.getElementById('countryf').innerHTML = serverData.country;

    document.getElementById('ispf').innerHTML = serverData.isp;
    document.getElementById('regionNamef').innerHTML = serverData.regionName;
    document.getElementById('timezonef').innerHTML = serverData.timezone;
    document.getElementById('ispf').innerHTML = serverData.isp;



}

function warnFindIp(data) {
    $('#alrtFindIp').show('fade');
    $('#outputFindIp').hide();

}