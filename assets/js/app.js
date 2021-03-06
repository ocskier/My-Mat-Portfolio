$(document).ready(() => {
  (getTemplateAjax = () => {
    var source;
    var theTemplate;

    $.ajax({
      url: "views/index.handlebars", //ex. js/templates/mytemplate.handlebars
      cache: true,
      success: function (data) {
        source = data;
        //Compile the template
        theTemplate = Handlebars.compile(source);
        $("body").prepend(theTemplate(hdbrsObj));
      },
    });
  })();

  // for (var i=0;i<projectsArray.length;i++) {
  // var newProjDiv = $('<div class="col s12 m4 l3"></div>');
  // var newCardDiv = $('<div class="card mycard"></div>');
  // var newCardA = $('<a href="'+projectsArray[i].Url+'" target="blank" class ="mycard-a" class="waves-effect waves-light"></a>');
  // var newCardImg = $(' <div class="card-image">');
  // newCardImg.append('<img src="'+projectsArray[i].Pic+'" alt="Portfolio Pic" style="border-radius: 25px 25px 0 0;">');
  // var newCardContent = $('<div class="card-content mycardbody">');
  // newCardContent.append('<p class="ctr-txt">'+projectsArray[i].Name+'</p>');
  // newCardDiv.append(newCardA).append(newCardImg).append(newCardContent);
  // newProjDiv.append(newCardDiv);
  // $("#proj-row").append(newProjDiv);

  // var newCardA = $('<a class="carousel-item" href="'+projectsArray[i].Url+'" target="blank" style="width:310px;overflow:initial"></a>');
  // newCardA.append($('<img src="'+projectsArray[i].Pic+'" alt="Portfolio Pic" style="border-radius: 25px;">')).append($('<p class="ctr-txt white-text">'+projectsArray[i].Name+'</p>'));
  // $("#proj-row").append(newCardA);
  // }

  //Get the HTML from the template   in the script tag
});
