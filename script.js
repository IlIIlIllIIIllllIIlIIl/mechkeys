function getURL(){
  var website = document.getElementById("website").value;
  getHttp =   website.substring(0, 8);
  getWWW = website.indexOf('www');
  if ( getHttp != "https://"){
    if (getWWW ==-1){
      website = 'https://www.' + website;
    }
    else{
      website = 'https://' + website;
    }
  }
  const request = new Request(website);
  const url = request.url;
  console.log(url);
  window.open("https://6e84d2e0-65a0-4808-9874-5f9e48bf14a9.id.repl.co/?URL="+url);
}
