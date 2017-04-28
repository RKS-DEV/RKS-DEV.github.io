function xyz() {
    var btnip = document.getElementById('btnip');
    btnip.addEventListener('click', function() {
        var ipInput = document.getElementById('ipInput').value;
        if (ipInput != "") {
            getIpDetails();

        } else {
            $('#outputFindIp').hide();
            $('#alrtFindIp').hide('fade');
            $('#alrtFindIp3').hide('fade');
            $('#alrtFindIp2').show('fade');
        }
    })
    var y = document.getElementById('ipInput');
    y.addEventListener('keydown', function(event) {
        if (event.keyCode == 13) {
            document.getElementById('btnip').click();
        }
    })
    $('#alrtFindIp').hide('fade');
    $('#alrtFindIp2').hide('fade');
    $('#alrtFindIp3').hide('fade');

    $('#clsYourIp').click(function() {
        $('#alrtYourIp').hide('fade');
    })

    $('#clsFindIp').click(function() {
        $('#alrtFindIp').hide('fade');
    })
    $('#clsFindIp2').click(function() {
        $('#alrtFindIp2').hide('fade');
    })
    $('#clsFindIp3').click(function() {
        $('#alrtFindIp3').hide('fade');
    })

    getYourIp();
}

// get your ip details

function getYourIp() {

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://ip-api.com/json');
    ourRequest.onloadstart = function() {
        $('#alrtYourIp2').hide();
        $('#alrtAYourIp').show('fade');
        //  loadyourip.style.display = 'block';
    }
    ourRequest.onloadend = function() {
        loadyourip.style.display = 'none';
        $('#alrtYourIp').hide();
    }
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
        $('#alrtYourIp2').show('fade');
        console.log('Problem in the network.');
    }
    ourRequest.send();

}

function createHtmlYourIp(serverData) {
    console.log(serverData);

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
    $('#outputFindIp').hide();
    var IP = document.getElementById('ipInput').value;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://ip-api.com/json/' + IP);

    ourRequest.onloadstart = function() {
        $('#alrtFindIp2').hide();
        $('#alrtFindIp').hide();
        loadip.style.display = 'block';
    }
    ourRequest.onloadend = function() {
        loadip.style.display = 'none';

    }
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
        $('#alrtFindIp3').show('fade');
        // $('#alrtFindIp2').hide();
        // $('#alrtFindIp3').hide();
        console.log('Problem in the networkasdasdas.');
    }
    ourRequest.send();

}

function createHtmlFindIp(serverData) {
    console.log(serverData);
    $('#outputFindIp').show();
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
    $('#alrtFindIp2').hide('fade');
    $('#alrtFindIp').show('fade');
    $('#outputFindIp').hide();

}