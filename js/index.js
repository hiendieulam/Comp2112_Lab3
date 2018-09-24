let emails;

let moreEmails = [
  {"name":"Melodee Friedlos","pic":"https://robohash.org/reprehenderitperspiciatisquia.jpg?size=50x50\u0026set=set1","email":"mfriedlos0@mit.edu","subject":"Sandakan 8 (Sandakan hachibanshokan bohkyo)","body":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.","user":"mfriedlos0","date":"4/2/2018","time":"3:45 AM"},
  {"name":"Helge Chittie","pic":"https://robohash.org/voluptatumnonin.bmp?size=50x50\u0026set=set1","email":"hchittie1@soup.io","subject":"Age of Stupid, The","body":"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.","user":"hchittie1","date":"5/21/2018","time":"5:45 AM"},
  {"name":"Karlan Chattey","pic":"https://robohash.org/dictaenimeaque.png?size=50x50\u0026set=set1","email":"kchattey2@sohu.com","subject":"Pope of Greenwich Village, The","body":"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","user":"kchattey2","date":"2/25/2018","time":"8:46 PM"},
  {"name":"Leicester Gouldie","pic":"https://robohash.org/undedoloremvoluptatem.bmp?size=50x50\u0026set=set1","email":"lgouldie3@uol.com.br","subject":"Semi-Pro","body":"Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.","user":"lgouldie3","date":"2/27/2018","time":"5:35 PM"},
  {"name":"Roderic Alexander","pic":"https://robohash.org/fugiatipsaqui.bmp?size=50x50\u0026set=set1","email":"ralexander4@tumblr.com","subject":"In Your Dreams (Dans tes rêves)","body":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.","user":"ralexander4","date":"12/14/2017","time":"4:50 PM"},{"name":"Kevin Caghy","pic":"https://robohash.org/officiaeaqueut.bmp?size=50x50\u0026set=set1","email":"kcaghy5@histats.com","subject":"Restoration","body":"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.","user":"kcaghy5","date":"12/22/2017","time":"2:39 PM"},
  {"name":"Celina Freda","pic":"https://robohash.org/itaqueenimrerum.jpg?size=50x50\u0026set=set1","email":"cfreda6@ustream.tv","subject":"IMAX: Hubble 3D","body":"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","user":"cfreda6","date":"2/26/2018","time":"11:06 PM"}
];

var timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(window.alert, 2000, 'That was really slow!');
}

function clearAlert() {
  window.clearTimeout(timeoutID);
}


fetch('https://my.api.mockaroo.com/email2.json?key=fed58100&rows=7')
.then (function(response){
  return response.json();
})
.then(function(myJson){
  emails=myJson;
  render();
});

function render(){
  const bodyemail = document.querySelector('#body_email');
  const snippet = emails.map((email,idx) => `
    <article id=article_${idx} class="dt w-100 bb b--black-05 pb2 mt2"  href="#0">
      <div class="dtc w2 w3-ns v-mid">
        <img src="${email.pic}" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
      </div>
      <div class="dtc v-mid pl3">
        <h1 id="name"class="f6 f5-ns fw6 lh-title black mv0">${email.name}</h1>
        <h2 class="unique f6 fw4 mt0 mb0 black-60">${email.email}</h2>
        <h4 id="subject" data-idx="${idx}" class="f6 f5-ns fw6 lh-title black mv0">${email.subject}</h4>
        <p id="body_para" class="f6 f5-ns fw6 lh-title black mv0">${email.body}</p>
      </div>     
    </article>
  `).join('');
  
  body_email.innerHTML = snippet;
  
  subject= Array.from(document.querySelectorAll('h4'));
  subject.map(btn => {
    btn.addEventListener('click', function(event) {
      event.preventDefault();
      idx = btn.dataset.idx;
      document.getElementById('view_subject').innerHTML = emails[idx].subject;
      document.getElementById('view_user').innerHTML = emails[idx].user;
      document.getElementById('view_date').innerHTML = emails[idx].date;
      document.getElementById('view_time').innerHTML = emails[idx].time;
      document.getElementById('view_email').innerHTML = emails[idx].body;
    });
  });
};//end render

submit_email= document.getElementById('submit_email');
  submit_email.addEventListener('click', function(event) {
    event.preventDefault();
    if(moreEmails.length > 0){
      emails.push(moreEmails[0]);
      moreEmails.shift();
      console.info('Add more email...');
      render();
      
    }else{
      console.info('No more email.');
    }    
});


