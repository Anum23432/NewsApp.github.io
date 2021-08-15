// by default function tesla is fetched
fetch('https://newsapi.org/v2/everything?q=tesla&apiKey=69601cff58d54dfcb52579c18c850a24'). then( function (response){
  console.log(response, 'Response');
  return  response.json();/*printing the data in form of json*/
}).then(myArray)
.catch(function (err) {
  console.log(err);
});;
function myArray(obj){
  let Array = obj.articles;
  console.log(Array);
  console.log(typeof Array);
  // after printing it on console we will print it on webpage

  document.querySelector("#main").innerHTML =(Array.map(articles => 
    // formation of div
    `
      <div class="card" >
         <img src="${articles.urlToImage}" class="card-img-top" alt="..."/>
         <div class="card-body">
         <h5 class="card-title">${articles.title}</h5>
         <p class="card-details">${articles.description}</p>
         <a href="#" class="btn btn-primary" onclick= "getElementbyId('moreInfo').innerHTML = 'URL:${articles.url}<br> Published:${articles.publishedAt}' ">Show More!</a>
         </div>
      </div>`
).join(''));}

// this is function of tesla button... called when button is pressed using it as a default too
// because no other data is fetched by browser.. only these two are working
function cars(){

fetch('https://newsapi.org/v2/everything?q=tesla&apiKey=69601cff58d54dfcb52579c18c850a24'). then( function (response){
  console.log(response, 'Response');
  return  response.json();
}).then(myArray)
.catch(function (err) {
  console.log(err);
});;
function myArray(obj){
  let Array = obj.articles;
  console.log(Array);
  console.log(typeof Array);
  document.querySelector("#main").innerHTML =(Array.map(articles => 
    `
      <div class="card" >
         <img src="${articles.urlToImage}" class="card-img-top" alt="..."/>
         <div class="card-body">
         <h5 class="card-title">${articles.title}</h5>
         <p class="card-details">${articles.description}</p>
         <a href="#" class="btn btn-primary" onclick= "getElementbyId('moreInfo').innerHTML = 'URL:${articles.url}<br> Published:${articles.publishedAt}' ">Show More!</a>
         </div>
      </div>`
).join(''));}}

// this is function of business button
function usNews() {
  fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=69601cff58d54dfcb52579c18c850a24')
  .then(function(response){
    return response.json();
  }).then(newsArray)
  .catch(function(err){
      console.log(err);
  });
  function newsArray(obj){
    let business = obj.articles;
    console.log(business);
    console.log(typeof business);
    document.querySelector('#main').innerHTML= (business.map(articles =>
     `
     
     <div class="card">
         <img src="${articles.urlToImage}" class="card-img-top" alt="..."/>
        <div class="card-body">
         <h5 class="card-title">${articles.title}</h5>
         <p class="card-details">${articles.description}</p><br>
         <a href="#" class="btn btn-primary" onclick= "getElementById('moreInfo').innerHTML = 'URL:${articles.url}<br> Published:${articles.publishedAt}' ">Show More!</a>
        </div>
      </div>
     
     `
      ).join(''));
    }}

//  as i want to add this button too but unfortunately this link is not working
//     function apple() {

//       var url = 'https://newsapi.org/v2/everything?' +
//       'q=Apple&' +
//       'from=2021-08-13&' +
//       'sortBy=popularity&' +
//       'apiKey=69601cff58d54dfcb52579c18c850a24';

// var req = new Request(url);

// fetch(req)
// .then(function(response) {
//     console.log(response.json());
// })

      // fetch('https://newsapi.org/v2/everything?q=Apple&apiKey=69601cff58d54dfcb52579c18c850a24')
      // .then(function(response){
      //   return response.json;)}
    //   .then(appleArray)
    //   .catch(function(err){
    //     console.log(err);
    //   });
    //   function appleArray(obj){
    //     let technology = obj.articles;
    //     console.log(technology);
    //     console.log(typeof technology);
    //     document.querySelector('#main').innerHTML = (technology.articles.map(articles =>
    //       `
    //       <div class="card"  style="width: 18rem;">
    //       <img src="${articles.urlToImage}" class="card-img-top" alt="..."/>
    //       <div class="card-body">
    //       <h5 class="card-title">${articles.title}</h5>
    //       <p class="card-text">${articles.content}</p>
    //       <p class="card-details">${articles.description}</p>
    //       <a href="#" class="btn btn-primary" onclick= "getElementbyId('moreInfo').innerHTML = 'Author:${articles.author}<br> URL:${articles.url}<br> Published:${articles.publishedAt}' ">Show More!</a>
    //       </div>
    //       </div>
    //       `
    //       ).join(''));
    //   }
    // }

