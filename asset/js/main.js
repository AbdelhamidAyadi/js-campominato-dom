let container = document.getElementById("container");
let difficulty = document.getElementById("difficulty");
let button = document.getElementById("button");


button.addEventListener('click',
    function () {
        if (difficulty.value == "easy") {
            container.innerHTML = "";
            for (let i = 1; i <= 100; i++) {
                let box = document.createElement('div');
                box.classList.add('box');
                box.classList.add('easy');
                container.appendChild(box);
                box.innerHTML += i ;

                box.addEventListener('click', function () {
                    this.classList.add('clicked')
                });
            }

        } else if (difficulty.value == "medium") {
            container.innerHTML = "";
            for (let i = 1; i <= 81; i++) {
                let box = document.createElement('div');
                box.classList.add('box');
                box.classList.add('medium');
                container.appendChild(box);
                box.innerHTML += i ;

                box.addEventListener('click', function () {
                    this.classList.add('clicked')
                });
            }

        } else if (difficulty.value == "difficult") {
            container.innerHTML = "";
            for (let i = 1; i <= 49; i++) {
                let box = document.createElement('div');
                box.classList.add('box');
                box.classList.add('difficult');
                container.appendChild(box);
                box.innerHTML += i ;

                box.addEventListener('click', function () {
                    this.classList.add('clicked')
                });
            }

        }
        
        
    }
    

);

list = [];
while ( list.length < 100) {
    let random = Math.floor(Math.random()*100);
    if (!list.includes(random)) {
        list.push(random);
    }
    
};
console.log(list);

