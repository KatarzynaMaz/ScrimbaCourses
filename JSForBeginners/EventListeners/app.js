let button = document.querySelector("#button");
    totalClicks = 0;

    function addClicks(event){
   
        totalClicks = totalClicks+1;
        document.getElementById("totalClicks").innerText = totalClicks; 
       
        }

  button.addEventListener("click", addClicks);