const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
const showLists = document.querySelectorAll("show-list");
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle");
 
// console.log(movieLists)
// console.log(showLists)

ball.addEventListener("click", () => {
  items.forEach(item => {
    item.classList.toggle("active")
  })
  ball.classList.toggle("active")
});

arrows.forEach((arrow, i) => {
  const itemNumber = document.querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    clickCounter++;
    if (itemNumber - (4 + clickCounter) >= 0) { 
      movieLists[i].style.transform = `translateX(${
      movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
     }px)`;
    }else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
  console.log("arrow is working")
});



function getMovies() {
  movieLists.forEach(movieList => {
    movieList.innerHTML = ''
  })
  axios.get('http://localhost:4004/movies/')
      .then(res => {
          // res.data.forEach(movie => {
          //     let movieItem = `<div class="movie-list-item" id=${movie.movie_id}>
          //         <img class="movie-list-item-img" src="${movie.Img}" alt="">
          //         <span class="movie-list-item-title">${movie.name}</span>
          //         <p class="movie-list-item-desc">${movie.description}</p>
          //         <button class="movie-list-item-button">Watch</button>
          //         <div class="addmovie">
          //             <i class="additem fas fa-plus-circle"></i>
          //         </div>
          //     </div>
          //     `

          //     movieLists.forEach(movieList => {
          //       movieList.innerHTML += movieItem
          //     })
          // })
          // console.log("getmovies is working")
          for(i = 0; i < res.data.length; i++) {
            let movie = res.data[i]
            let movieItem = `<div class="movie-list-item" id=${movie.movie_id}>
                  <img class="movie-list-item-img" src="${movie.Img}" alt="">
                  <span class="movie-list-item-title">${movie.name}</span>
                  <p class="movie-list-item-desc">${movie.description}</p>
                  <button class="movie-list-item-button">Watch</button>
                  <div class="addmovie">
                      <i class="additem fas fa-plus-circle"></i>
                  </div>
              </div>`
            if (i < 6) {
              movieLists[0].innerHTML += movieItem
            }else if (i >= 6 && i < 13) {
              movieLists[1].innerHTML += movieItem
            }else if(i >= 13 && i < 20) {
              movieLists[2].innerHTML += movieItem
            }
          }
      })
}

function getShows() {
  showLists.forEach(showList => {
    showList.innerHTML = ''
  })
  axios.get('http://localhost:4004/shows/')
      .then(res => {
          res.data.forEach(show => {
              let showItem = `<div class="movie-list-item" id=${show.show_id}>
                  <img class="movie-list-item-img" src="${show.Img}" alt="">
                  <span class="movie-list-item-title">${show.name}</span>
                  <p class="movie-list-item-desc">${show.description}</p>
                  <button class="movie-list-item-button">Watch</button>
                  <div class="addmovie">
                      <i class="additem fas fa-plus-circle"></i>
                  </div>
              </div>
              `

              showLists.forEach(showList => {
                showList.innerHTML += showItem
              })
          })
      })
}

getMovies()
getShows()