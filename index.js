
        var typed = new Typed(".auto-input", {
          strings: [
            "buying and selling of property",
            "renting of apartment",
            "building of houses",
          ],
          typeSpeed: 100,
          backSpeed: 100,
          loop: true
        });
        
         $(document).ready(function(){
             $("button").click(function(){
               $("#p").slideToggle(50);
             });
           });


           let filterInput = document.getElementById('filterInput');

           filterInput.addEventListener('keyup', filterNames);

           function filterNames(){
             
            let filterValue =
            document.getElementById('filterInput').value.toUpperCase();
            
            let ul = document.getElementById('names');

            let li = ul.querySelectorAll('li.collection-item');

            for(let i = 0;i < li.length;i++) {
              let a = li[i].getElementsByTagName('a')[0];

              if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
                li[i].style.display = '';
              } else {
                li[i].style.display = 'none';
              }
            }
           }