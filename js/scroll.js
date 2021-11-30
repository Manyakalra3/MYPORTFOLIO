window.addEventListener("scroll", getScrollPos);
        var sections = document.querySelectorAll("section");
        var progress = document.querySelector(".progress");
        function getScrollPos() {
            var scroll_y = window.scrollY;
            var sec1 = document.querySelector('#home');
           var sec2= document.querySelector('#about');
                var section_offset_y = sec1.offsetTop;
                console.log(section_offset_y - scrollY);
                var pos = section_offset_y - scrollY;
                if(pos <= 200) {
                    sec2.className = 'animate';
                }
            }
        