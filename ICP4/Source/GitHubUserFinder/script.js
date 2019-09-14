function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it.
    // The function should finally return the object(it now contains the response!)
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', "https://api.github.com/users/" + user, true);
    xhttp.send();

    //This will be called after the response is received
    xhttp.onreadystatechange = function() {

        if(xhttp.readyState == 4)
        {
            if(xhttp.status == 200)
            {
                var response = JSON.parse(xhttp.responseText);
                //alert(response.ip);
                console.log(response);
                showUser(response);
            }
         else {
                noSuchUser(username);
            }
            // analyze HTTP status of the response
            // if (xhttp.status == 200) {
            //     var responsePlane = xhttp.responseText;
            //     var response = JSON.parse(xhttp.responseText);
            //     console.log(response);
            //     // show the result
            //     showUser(response);
            // } else {
            //     noSuchUser(username);
            // }
        }
    };

    // xhttp.onreadystatechange = processRequest;
    //
    // function processRequest(e) {
    //     console.log(xhttp.readyState);
    //
    //     if (xhttp.readyState == 4) {
    //
    //         if (xhttp.status == 200) {

                // var response = JSON.parse(xhttp.responseText);
                // //alert(response.ip);
                // console.log(response);
                // showUser(response);
    //         }
    //         else {
    //             noSuchUser(username);
    //         }
    //     }
    //
    // }
}

function showUser(user) {
    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
    // var json = JSON.parse(xhr.responseText);
    // var yourData = json.Data;
    //document.getElementById("profile1").innerHTML = data.Data[0].avatar_url;
    $("#profilePic").html("<img height='150' width='150' src='"+ user.avatar_url+"'/>");
    // $("#profilePic").innerHTML = '<img src="'+user.avatar_url+'" />'
    // document.getElementById("name").innerHTML = response.login;
    $("#name").text('User Name : '+user.login);
    // document.getElementById("Id").innerHTML = data.Data[0].id;
    $("#Id").text('Profile Id : '+user.id);
    //document.getElementById("link").innerHTML = data.Data[0].html_url;
    $("#link").append("<a href='"+user.html_url+"'>Link URL</a>");
}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
    alert("user selected " + username + " is not present");
}

$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username);
            //if the response is successful show the user's details
            // if (response.status == 200) {
            // showUser(JSON.parse(response.responseText));
                //else display suitable message
            // } else {
            //     noSuchUser(username);
            // }
        }
    })
});
