function abc() {
    getNational();
    getInter();
    getSports();
    getTech();

}

// loads natinal news
function getNational() {


    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=latest&apiKey=69e7fad93b294937beb6ec4d16434e2c');
    ourRequest.onloadstart = function() {

        loadnews.style.display = 'block';
    }
    ourRequest.onloadend = function() {
        loadnews.style.display = 'none';
    }
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            if (ourData.status == "ok") {

                createHtmlNAtional(ourData);
            } else {

                warnNational();
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

function createHtmlNAtional(serverData) {
    console.log(serverData);
    $('#outputNational').show();
    var rawTemplate = document.getElementById('rawTemplateNational').innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var generatedTemplate = compiledTemplate(serverData);



    var reslt = document.getElementById('outputNational');
    reslt.innerHTML = generatedTemplate;

}

function warnNational() {


    $('#outputNational').hide();

}



// loads International news
function getInter() {


    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            if (ourData.status == "ok") {

                createHtmlInter(ourData);
            } else {

                warnInter();
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

function createHtmlInter(serverData) {
    console.log(serverData);
    $('#outputInternational').show();
    var rawTemplate = document.getElementById('rawTemplateNational').innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var generatedTemplate = compiledTemplate(serverData);

    $('#alrti').hide();

    var reslt = document.getElementById('outputInternational');
    reslt.innerHTML = generatedTemplate;

}

function warnInter() {
    $('#alrti').show('fade');

    $('#outputInternational').hide();

}


// loads Sports news
function getSports() {


    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=espn-cric-info&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            if (ourData.status == "ok") {

                createHtmlSports(ourData);
            } else {

                warnSports();
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

function createHtmlSports(serverData) {
    console.log(serverData);
    $('#outputSports').show();
    var rawTemplate = document.getElementById('rawTemplateSports').innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var generatedTemplate = compiledTemplate(serverData);

    $('#alrts').hide();

    var reslt = document.getElementById('outputSports');
    reslt.innerHTML = generatedTemplate;

}

function warnSports() {
    $('#alrts').show('fade');

    $('#outputSports').hide();

}



// loads Tech news
function getTech() {


    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', ' https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            if (ourData.status == "ok") {

                createHtmlTech(ourData);
            } else {

                warnTech();
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

function createHtmlTech(serverData) {
    console.log(serverData);
    $('#outputTech').show();
    var rawTemplate = document.getElementById('rawTemplateTech').innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var generatedTemplate = compiledTemplate(serverData);

    $('#alrtt').hide();

    var reslt = document.getElementById('outputTech');
    reslt.innerHTML = generatedTemplate;

}

function warnTech() {
    $('#alrtt').show('fade');

    $('#outputTech').hide();

}