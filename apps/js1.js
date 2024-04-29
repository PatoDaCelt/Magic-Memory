document.addEventListener('DOMContentLoaded', () => {

    //estas son las opciones de cartas
    const cardArray = [
      {
        name: 'fries',
        img: 'images/1.jpeg'
      },
      {
        name: 'cheeseburger',
        img: 'images/2.jpeg'
      },
      {
        name: 'ice-cream',
        img: 'images/3.jpeg'
      },
      {
        name: 'pizza',
        img: 'images/4.jpeg'
      },
      {
        name: 'milkshake',
        img: 'images/5.jpeg'
      },
      {
        name: 'hotdog',
        img: 'images/7.jpg'
      },
      {
        name: 'fries',
        img: 'images/1.jpeg'
      },
      {
        name: 'cheeseburger',
        img: 'images/2.jpeg'
      },
      {
        name: 'ice-cream',
        img: 'images/3.jpeg'
      },
      {
        name: 'pizza',
        img: 'images/4.jpeg'
      },
      {
        name: 'milkshake',
        img: 'images/5.jpeg'
      },
      {
        name: 'hotdog',
        img: 'images/7.jpg'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //crea la tabla
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //verifica similitud
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('¡Selecciona otra imagen!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'images/check.png')
        cards[optionTwoId].setAttribute('src', 'images/check.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        alert("¡SIGUIENTE NIVEL!");
        window.location.href = "./Nivel 3.html";
        
      }    
       // Reiniciar la página
    }
  
    //voltea la carta
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 400)
      }
    } 
    createBoard();
  })
  
  var cronos;
       function init() {
         cronos = setInterval(function() { timer() }, 1000);
       }
       setInterval(function() {
        mostrarPopUp();
    }, 20000); // Mostrar pop-up cada 20 segundos
  
    function mostrarPopUp() {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("popup").style.display = "block";
    }
  
    function cerrarPopUp() {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("popup").style.display = "none";
        document.getElementById("respuestaInput").value = ""; // Limpiar el campo de respuesta
    }
  