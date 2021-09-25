    function sendFun() {                    // when button: Start HTTP request was pressed this function will be executed
        var name = document.getElementById("namebox").value;     //connecting text boxes to here by making this variables to an HTML readbe value
        var propic = document.getElementById("picbox").value;   // the things that user enter in the text boxes will be in some variables.
        var message = document.getElementById("cbox").value;
        var webhook = document.getElementById("webx").value;
        var request = new XMLHttpRequest();    //this bad boy will help us to send the http request
        request.open("POST", webhook);

        request.setRequestHeader('Content-type', 'application/json'); // just setting up the HTTP request content syntax and ...

        var params = {     // now setting everything that user entered into a var called params
            username: name,
            avatar_url: propic,
            content: message
        }
        request.send(JSON.stringify(params)); // this will send PARAMS as a HTTP request to the Webhook
		alert("message sent!");
    }

    function exitFun() {   //it just exits the tab when you press button : Exit
        window.close();
    }                       // make sure to join my discord server BYE.... <3