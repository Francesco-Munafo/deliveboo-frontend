<script>
export default {
    name: 'AppHeader',
}

</script>


<template>
    <div class="my_navbar">
        <nav class="navbar navbar-expand-lg  d-flex justify-content-around">
            <div>

                <a class="navbar-brand" href="#"><span>Deliveboo</span></a>

            </div>

            <div>

                <button class="btn5" type="submit">Login</button>

            </div>
        </nav>
    </div>

    <div class="my_jumbo jumbotron jumbotron-fluid pt-5 pb-5">

        <div class="pt-5">
            <h1 class="my_title text-center fw-bold">I piatti dei ristoranti che ami e la <br> spesa, a domicilio
            </h1>
        </div>


        <section>
            <div class="container">
                <div class="carousel">
                    <input type="radio" name="slides" checked="checked" id="slide-1">
                    <input type="radio" name="slides" id="slide-2">
                    <input type="radio" name="slides" id="slide-3">
                    <input type="radio" name="slides" id="slide-4">
                    <input type="radio" name="slides" id="slide-5">
                    <input type="radio" name="slides" id="slide-6">
                    <ul class="carousel__slides">
                        <li class="carousel__slide">
                            <figure>
                                <div>
                                    <img src="https://pbs.twimg.com/media/Djgq44jW4AAszE9.jpg" alt="">
                                </div>
                                <figcaption>

                                    <span class="credit">Le mitiche BBQ Ribs</span>
                                </figcaption>
                            </figure>
                        </li>
                        <li class="carousel__slide">
                            <figure>
                                <div>
                                    <img src="https://www.sushi-origami.it/wp-content/uploads/2019/04/DSCF2703-768x514.jpg"
                                        alt="">
                                </div>
                                <figcaption>

                                    <span class="credit">Barca sushi misto</span>
                                </figcaption>
                            </figure>
                        </li>
                        <li class="carousel__slide">
                            <figure>
                                <div>
                                    <img src="https://th.bing.com/th/id/R.c5046015fea5a538b5e046fe2245b602?rik=TDqapn3oMYyHuQ&pid=ImgRaw&r=0"
                                        alt="">
                                </div>
                                <figcaption>

                                    <span class="credit">Spaghetti allo scoglio</span>
                                </figcaption>
                            </figure>
                        </li>
                        <li class="carousel__slide">
                            <figure>
                                <div>
                                    <img src="https://th.bing.com/th/id/OIP.umUl8oJLZzAcYHFuIrzxdwHaE7?rs=1&pid=ImgDetMain"
                                        alt="">
                                </div>
                                <figcaption>

                                    <span class="credit">Regina di Napoli</span>
                                </figcaption>
                            </figure>
                        </li>
                        <li class="carousel__slide">
                            <figure>
                                <div>
                                    <img src="https://th.bing.com/th/id/R.f45c07e5ee763be2ab986f9849f1d8e1?rik=phQAhFfB13ddxg&pid=ImgRaw&r=0"
                                        alt="">
                                </div>
                                <figcaption>

                                    <span class="credit">Classic burger XXL</span>
                                </figcaption>
                            </figure>
                        </li>
                        <li class="carousel__slide">
                            <figure>
                                <div>
                                    <img src="https://th.bing.com/th/id/R.363cbe94bb1935910e68fbbeb0a732b0?rik=A%2b8ZSWsEcVWgHA&pid=ImgRaw&r=0"
                                        alt="">
                                </div>
                                <figcaption>

                                    <span class="credit">Tacos di carne</span>
                                </figcaption>
                            </figure>
                        </li>
                    </ul>
                    <ul class="carousel__thumbnails">
                        <li>
                            <label for="slide-1"><img src="https://pbs.twimg.com/media/Djgq44jW4AAszE9.jpg" alt=""></label>
                        </li>
                        <li>
                            <label for="slide-2"><img
                                    src="https://www.sushi-origami.it/wp-content/uploads/2019/04/DSCF2703-768x514.jpg"
                                    alt=""></label>
                        </li>
                        <li>
                            <label for="slide-3"><img
                                    src="https://th.bing.com/th/id/R.c5046015fea5a538b5e046fe2245b602?rik=TDqapn3oMYyHuQ&pid=ImgRaw&r=0"
                                    alt=""></label>
                        </li>
                        <li>
                            <label for="slide-4"><img
                                    src="https://th.bing.com/th/id/OIP.umUl8oJLZzAcYHFuIrzxdwHaE7?rs=1&pid=ImgDetMain"
                                    alt=""></label>
                        </li>
                        <li>
                            <label for="slide-5"><img
                                    src="https://th.bing.com/th/id/R.f45c07e5ee763be2ab986f9849f1d8e1?rik=phQAhFfB13ddxg&pid=ImgRaw&r=0"
                                    alt=""></label>
                        </li>
                        <li>
                            <label for="slide-6"><img
                                    src="https://th.bing.com/th/id/R.363cbe94bb1935910e68fbbeb0a732b0?rik=A%2b8ZSWsEcVWgHA&pid=ImgRaw&r=0"
                                    alt=""></label>
                        </li>
                    </ul>
                </div>
            </div>
        </section>









    </div>
</template>


<style lang="scss" scoped>
@use "../assets/scss/variables" as *;
@mixin aspect-ratio($width, $height) {
    position: relative;

    &:before {
        display: block;
        content: "";
        width: 100%;
        padding-top: calc($height / $width) * 100%;
    }

    >img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
    }
}

// Styling



.container {
    max-width: 1044px;
    margin: 0 auto;
    padding: 0 20px;
}

.carousel {
    display: block;
    text-align: left;
    position: relative;
    margin-bottom: 22px;

    >input {
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        height: 1px;
        width: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;

        &:nth-of-type(6):checked~.carousel__slides .carousel__slide:first-of-type {
            margin-left: -500%;
        }

        &:nth-of-type(5):checked~.carousel__slides .carousel__slide:first-of-type {
            margin-left: -400%;
        }

        &:nth-of-type(4):checked~.carousel__slides .carousel__slide:first-of-type {
            margin-left: -300%;
        }

        &:nth-of-type(3):checked~.carousel__slides .carousel__slide:first-of-type {
            margin-left: -200%;
        }

        &:nth-of-type(2):checked~.carousel__slides .carousel__slide:first-of-type {
            margin-left: -100%;
        }

        &:nth-of-type(1):checked~.carousel__slides .carousel__slide:first-of-type {
            margin-left: 0%;
        }

        &:nth-of-type(1):checked~.carousel__thumbnails li:nth-of-type(1) {
            box-shadow: 0px 0px 0px 5px rgba(0, 0, 255, 0.5);
        }

        &:nth-of-type(2):checked~.carousel__thumbnails li:nth-of-type(2) {
            box-shadow: 0px 0px 0px 5px rgba(0, 0, 255, 0.5);
        }

        &:nth-of-type(3):checked~.carousel__thumbnails li:nth-of-type(3) {
            box-shadow: 0px 0px 0px 5px rgba(0, 0, 255, 0.5);
        }

        &:nth-of-type(4):checked~.carousel__thumbnails li:nth-of-type(4) {
            box-shadow: 0px 0px 0px 5px rgba(0, 0, 255, 0.5);
        }

        &:nth-of-type(5):checked~.carousel__thumbnails li:nth-of-type(5) {
            box-shadow: 0px 0px 0px 5px rgba(0, 0, 255, 0.5);
        }

        &:nth-of-type(6):checked~.carousel__thumbnails li:nth-of-type(6) {
            box-shadow: 0px 0px 0px 5px rgba(0, 0, 255, 0.5);
        }
    }
}

.carousel__slides {
    position: relative;
    z-index: 1;
    padding: 0;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    display: flex;
}

.carousel__slide {
    position: relative;
    display: block;
    flex: 1 0 100%;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: all 300ms ease-out;
    vertical-align: top;
    box-sizing: border-box;
    white-space: normal;

    figure {
        display: flex;
        margin: 0;
    }

    div {
        @include aspect-ratio(3, 2);
        width: 100%;
    }

    img {
        display: block;
        flex: 1 1 auto;
        object-fit: cover;
    }

    figcaption {
        align-self: flex-end;
        padding: 20px 20px 0 20px;
        flex: 0 0 auto;
        width: 25%;
        min-width: 150px;
    }

    .credit {
        margin-top: 1rem;
        color: black;
        display: block;
        font-family: cursive;
    }

    &.scrollable {
        overflow-y: scroll;
    }
}

.carousel__thumbnails {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    margin: 0 -10px;

    .carousel__slides+& {
        margin-top: 20px;
    }

    li {
        flex: 1 1 auto;
        max-width: calc((100% / 6) - 20px);
        margin: 0 10px;
        transition: all 300ms ease-in-out;
    }

    label {
        display: block;
        @include aspect-ratio(1, 1);


        &:hover,
        &:focus {
            cursor: pointer;

            img {
                box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.25);
                transition: all 300ms ease-in-out;
            }
        }
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


}


.my_navbar {
    background-color: $deliv-primary;
}

.my_jumbo {
    background-color: $deliv-primary;
}

.my_title {
    font-size: 3.8rem;
    color: $deliv-elements;
    font-family: Arial, Helvetica, sans-serif;
}


.btn5{
    display:inline-block;
    padding:0.7em 1.4em;
    margin:0 0.3em 0.3em 0;
    border:none;
    border-radius:0.5em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'arial';
    text-transform:uppercase;
    font-weight:400;
    color:#FFFFFF;
    background-color:$deliv-elements;
    box-shadow:inset 0 -0.6em 0 -0.3em rgba(0,0,0,0.20);
    text-align:center;
    position:relative;
    cursor:pointer;
  }
  .btn5:hover{
    background:#E64B3E;
  }
  .btn5:active{
    background:#D7372A;
    top:0.15em;
    color:#D9D9D9;
    box-shadow:none;
  }

  span {
    font-size: 3rem;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: $deliv-elements;
}


section {
    background: $deliv-primary;
    padding: 50px 0;
}
</style>