let container = document.getElementById("container");
let difficulty = document.getElementById("difficulty");
let button = document.getElementById("button");




button.addEventListener('click',
        function () {
            if (difficulty.value == "easy") {
                container.innerHTML = "";

                list = [];
                while (list.length < 100) {
                    let random = Math.floor((Math.random() * 100) + 1);
                    if (!list.includes(random)) {
                        list.push(random);
                    }

                };

                listBombs = [];
                while (listBombs.length < 16) {
                    let random = Math.floor((Math.random() * 100) + 1);
                    if (!listBombs.includes(random)) {
                        listBombs.push(random);
                    }

                };



                for (let i = 0; i < 100; i++) {
                    let box = document.createElement('div');
                    box.classList.add('box');
                    box.classList.add('easy');
                    container.appendChild(box);
                    box.innerHTML += list[i];

                    box.addEventListener('click', clicked);
                    
                    function clicked() {

                        this.classList.add('clicked');

                        for (let k = 0; k < 16; k++) {

                            if (listBombs[k] == Number(this.innerText)) {
                                this.classList.add('red');
                                alert("Hai perso!");
                    
                            }


                        }
                    }

                    



                }
                } else if (difficulty.value == "medium") {
                    container.innerHTML = "";

                    list = [];
                    while (list.length < 81) {
                        let random = Math.floor((Math.random() * 81) + 1);
                        if (!list.includes(random)) {
                            list.push(random);
                        }

                    };
                    listBombs = [];
                    while (listBombs.length < 16) {
                        let random = Math.floor((Math.random() * 100) + 1);
                        if (!listBombs.includes(random)) {
                            listBombs.push(random);
                        }
    
                    };

                    for (let i = 0; i < 81; i++) {
                        let box = document.createElement('div');
                        box.classList.add('box');
                        box.classList.add('medium');
                        container.appendChild(box);
                        box.innerHTML += list[i];

                        box.addEventListener('click', clicked);
                    
                    function clicked() {

                        this.classList.add('clicked');

                        for (let k = 0; k < 16; k++) {

                            if (listBombs[k] == Number(this.innerText)) {
                                this.classList.add('red');
                                alert("Hai perso!");
                    
                            }


                        }
                    }
                    }

                } else if (difficulty.value == "difficult") {
                    container.innerHTML = "";
                    list = [];
                    while (list.length < 49) {
                        let random = Math.floor((Math.random() * 49) + 1);
                        if (!list.includes(random)) {
                            list.push(random);
                        }

                    };
                    listBombs = [];
                    while (listBombs.length < 16) {
                        let random = Math.floor((Math.random() * 100) + 1);
                        if (!listBombs.includes(random)) {
                            listBombs.push(random);
                        }
    
                    };
                    console.log(list);
                    for (let i = 0; i < 49; i++) {
                        let box = document.createElement('div');
                        box.classList.add('box');
                        box.classList.add('difficult');
                        container.appendChild(box);
                        box.innerHTML += list[i];

                        box.addEventListener('click', clicked);
                    
                        function clicked() {
    
                            this.classList.add('clicked');
    
                            for (let k = 0; k < 16; k++) {
    
                                if (listBombs[k] == Number(this.innerText)) {
                                    this.classList.add('red');
                                    alert("Hai perso!");
                        
                                }
    
    
                            }
                        }
                    }

                }


            }


        );