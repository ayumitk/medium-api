const user = 'ayumitk';
const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${user}`;

fetch(url).then(response => response.json()).then((json) => {
  console.log(json.items);
}).catch(function(ex) {
  console.log(ex);
});