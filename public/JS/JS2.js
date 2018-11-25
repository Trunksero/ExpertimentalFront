console.log('lool');
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e){
  e.preventDefault();
  console.log('it works');
  var sitename = document.getElementById('siteName').value;
  var siteURL = document.getElementById('siteUrl').value;
  var main = document.getElementById('bookmarkResults');
  var bookmark = {
    name: siteName,
    url: siteUrl
  }
  var p = document.createElement('p');
  var btn = document.createElement('button');
  var targets = document.createElement('a');
  var divs = document.createElement('div');


main.appendChild(divs);
divs.appendChild(targets);
targets.appendChild(p);
divs.appendChild(btn);
divs.classList.add('addorder');
p.textContent = sitename;
btn.textContent = 'Delete';
btn.classList.add("btn-secondary");
btn.classList.add("btn");


  console.log(bookmark)

  //Local Storage Test
  localStorage.setItem("lol", bookmark);
}
