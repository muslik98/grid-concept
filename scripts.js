let buttons = document.querySelectorAll(".button button");

buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        
        console.log(this);
        if(e.target.innerText == "grid-template-columns-&-row") {
            let grid = document.querySelector(".grid");
            grid.classList.toggle("colrow");
            console.log(grid);

            let classAtribute = document.querySelector("#class");
            classAtribute.style.display = "block";
            classAtribute.textContent = grid.getAttribute("class");
            
            let text = document.querySelector("#property");
            text.style.display = "block";
            let style = window.getComputedStyle(grid);
            text.textContent = e.target.innerText + " property : " + "column = " + style.getPropertyValue("grid-template-columns") + ", rows = " + style.getPropertyValue("grid-template-rows");
        }else if(e.target.innerText == "grid-template-columns-only") {
            let grid = document.querySelector(".grid");
            grid.classList.toggle("columns-only");
            console.log(grid);

            let classAtribute = document.querySelector("#class");
            classAtribute.style.display = "block";
            classAtribute.textContent = grid.getAttribute("class");

            let text = document.querySelector("#property");
            text.style.display = "block";
            let style = window.getComputedStyle(grid);
            text.textContent = e.target.innerText + " property : " + "column = " + style.getPropertyValue("grid-template-columns") + ", rows = " + style.getPropertyValue("grid-template-rows");
        }else if (e.target.innerText == "grid-template-rows-only"){
            let grid = document.querySelector(".grid");
            grid.classList.toggle("rows-only");
            console.log(grid);

            let classAtribute = document.querySelector("#class");
            classAtribute.style.display = "block";
            classAtribute.textContent = grid.getAttribute("class");

            let text = document.querySelector("#property");
            text.style.display = "block";   
            let style = window.getComputedStyle(grid);
            text.textContent = e.target.innerText + " property : " + "column = " + style.getPropertyValue("grid-template-columns") + ", rows = " + style.getPropertyValue("grid-template-rows");
        }else {
            let grid = document.querySelector(".grid");
            grid.setAttribute("class", "container box grid");
            let classAtribute = document.querySelector("#class");
            classAtribute.style.display = "none";
            let text = document.querySelector("#property");
            text.style.display = "none";   
        }
    });
});