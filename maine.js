


var x = [ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, veritatis...." , "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque quidem pariatur in quos saepe.." , " consectetur adipisicing elit. Exercitationem itaque quidem pariatur in quos saepe." , "Lorem ipsum dolor sit amet consectetur adipisicing elit."];



    btn.addEventListener('click' , function(){


                document.getElementById("test").innerHTML = Math.random() * x.length;
        
                document.getElementById("test").innerHTML = Math.trunc(Math.random() * x.length);

                document.getElementById("test").innerHTML = x[Math.trunc(Math.random() * x.length)];
        });
    

        

        
