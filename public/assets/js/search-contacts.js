const searchInput = $("input#search-input");
const searchBtn = $("#submitSearch");

searchBtn.on("click", function(event) {
  event.preventDefault();

  const queryText = searchInput.val().trim();


  if (queryText !== '') {
    console.log(queryText);
    $.get("/search/new", {queryText}, function(){
      window.location.href = "/search/new?queryText=" + queryText; 
    })
  }
  else {
    console.log("searching for nothing")
  }
})