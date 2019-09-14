function upDate(previewPic) {
    /* In this function you should
       1) change the url for the background image of the div with the id = "image"
       to the source file of the preview image

       2) Change the text  of the div with the id = "image"
       to the alt text of the preview image
       */

    var imageURL = previewPic.src;
    var imgAttr = document.createElement("IMG");
    imgAttr.setAttribute("id", "fillImage");
    imgAttr.setAttribute("src", imageURL);
    imgAttr.setAttribute("width", "600px");
    // imgAttr.setAttribute("height", "450px");
    imgAttr.setAttribute("alt", "The Pulpit Rock");
    document.getElementById('image').innerHTML = "";

    document.getElementById('image').appendChild(imgAttr);

}

function unDo() {
    /* In this function you should
   1) Update the url for the background image of the div with the id = "image"
   back to the orginal-image.  You can use the css code to see what that original URL was

   2) Change the text  of the div with the id = "image"
   back to the original text.  You can use the html code to see what that original text was
   */
    var element = document.getElementById("fillImage");
    element.parentNode.removeChild(element);
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";

}
