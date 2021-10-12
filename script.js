function getURL(){
  var website = document.getElementById("website").value;
  if(website.length==0){
    website="https://www.google.com/";
  }
  website = fixURL(website);
  const request = new Request(website);
  const url = request.url;
  console.log(url);
  window.open("https://67e7a4c5-dc48-4151-a0a1-bd6fbd859afe.id.repl.co/?URL="+url);
}

function fixURL(website){
  getHttp = website.substring(0, 8);
  getWWW = website.includes('www');
  const re = /[.]/g;
  dotCount = website.match(re).length;
  if (getHttp != "https://"){
    if (!getWWW && dotCount<2){
      website = 'https://www.' + website;
    }
    else{
      website = 'https://' + website;
    }
  }
  return website;
}
