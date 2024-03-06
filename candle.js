document.addEventListener("DOMContentLoaded", function() {
    const revieew = [{
            nom: "ayoub bennani",
            text: "c'est magnifique, j'ai vraiment aimé! merci candles store",
            img: 'images/imm1.jpg',
            star: 5
        },
        {
            nom: "salma tazi",
            text: "simple quality it is okay not bad!",
            img: '/images/imm2.jpg',
            star: 3
        },
        {
            nom: "soukaina bsr",
            text: "it smells like heaven for me! i loooooooove it",
            img: '/images/imm3.jpg',
            star: 5
        },
        {
            nom: "cedric michel",
            text: "i meditate using it i see nirvana from here!",
            img: '/images/imm5.jpg',
            star: 5
        },
        {
            nom: "fouzia fouzi",
            text: "not bad simple quality",
            img: '/images/imm4.jpg',
            star: 3
        },

    ];

    const imgg = document.querySelector(".rev .box .user .img-person");
    const name = document.querySelector(".rev .box .user .name");
    const texto = document.querySelector(".rev .box .user .text");
    const bottonL = document.querySelector(".rev .box .btn-container .btn-left");
    const bottonR = document.querySelector(".rev .box .btn-container .btn-right");
    const boxx = document.querySelector(".rev .box .stars");
    let current = -1;

    function changeRev(person) {
        const item = revieew[current];
        imgg.src = item.img;
        name.textContent = item.nom;
        texto.textContent = item.text;

        // Clear previous stars
        boxx.innerHTML = '';
        // Append stars
        for (let i = 0; i < item.star; i++) {
            let li = document.createElement('li');
            li.innerHTML = '<i class="fas fa-star"></i>';
            li.classList.add('star');
            boxx.appendChild(li); // Append li instead of star
        }
    }

    bottonL.addEventListener("click", function() {
        current--;
        if (current < 0)
            current = revieew.length - 1;

        changeRev(current);
    });
    bottonR.addEventListener("click", function() {
        current++;
        if (current > revieew.length - 1)
            current = 0;

        changeRev(current);
    });
});