
// header menu fixed script 

function scroller() {

  let p = window.pageYOffset;

  if (p > 200) {
    let k = document.getElementById('header');
    k.classList.add('active')
  } else {
    let k = document.getElementById('header');
    k.classList.remove('active')
  }

}


 var linkbtn = document.getElementsByClassName('link-btn');

       
            for (let i = 0; i <= linkbtn.length; i++) {
                linkbtn[i].addEventListener("click", function () {
                    for (var j = 0; j < linkbtn.length; j++) {
                        linkbtn[j].classList.remove('active');
                    }
                    this.classList.add('active');
                });

            }











