<script>
export default {
    name: 'AppHeader',
}

</script>


<template>
    <header class="bg_color navbar py-3 px-1 p-sm-3 p-md-1 shadow">
        <div class="container">
            <div class="d-none d-md-flex align-items-center">
                <img style="width: 80px" src="/src/assets/img/wired-lineal-13-pizza.gif" alt="pizza">
                <img style="width: 200px" src="/src/assets/img/Screenshot_2023-12-09_153609-removebg-preview.png"
                    alt="logo">
            </div>
            <div class="d-flex gap-3">
                <button class="d-none d-sm-block btn header-button">
                    <a class="col_select text-decoration-none" href="/">
                        <i class="fa-solid fa-house"></i> Home
                    </a>
                </button>

                <button class="btn header-registration-button">
                    <a class="col_white text-decoration-none" href="http://127.0.0.1:8000/login">
                        <i class="fa-solid fa-user"></i> Sei un ristoratore?
                    </a>
                </button>
            </div>
        </div>
    </header>


    <div class="my_jumbo jumbotron jumbotron-fluid pt-5 pb-5">

        <div class="pt-5">
            <h1 class="my_title text-center fw-bold">I piatti dei ristoranti che ami e la <br> spesa, a domicilio
            </h1>
        </div>


        <section>
            <div class="slider">
                <div class="slide-track">
                    <div class="slide">
                        <img src="https://images.unsplash.com/photo-1606149059549-6042addafc5a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://images.unsplash.com/photo-1541151040323-4d766525ec84?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://images.unsplash.com/photo-1528279027-68f0d7fce9f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://plus.unsplash.com/premium_photo-1675453377179-22d446fe10ad?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://images.unsplash.com/photo-1562059390-a761a084768e?q=80&w=1419&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                    </div>
                    <div class="slide">
                        <img src="https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                    </div>
                </div>
            </div>
        </section>


    </div>
</template>


<style lang="scss" scoped>
@use "../assets/scss/variables" as *;

.header-button {
    padding: 9px 20px;
    border-radius: 50px;
    cursor: pointer;
    border: 0;
    background-color: white;
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 15px;
    transition: all 0.5s ease;

    .col_select,
    i {
        color: #3d348b;
        font-weight: bold;
    }
}

.header-button:hover {
    letter-spacing: 3px;
    background-color: #3d348b;
    box-shadow: rgb(93 24 220) 0px 7px 29px 0px;

    .col_select,
    i {
        color: white;
        font-weight: bold;
    }
}

.header-registration-button {
    padding: 9px 20px;
    border-radius: 50px;
    cursor: pointer;
    border: 0;
    background-color: #3d348b;
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 15px;
    transition: all 0.5s ease;

    .col_white {
        color: white;
    }
}

.header-registration-button:hover {
    letter-spacing: 3px;
    background-color: white;
    box-shadow: rgb(93 24 220) 0px 7px 29px 0px;

    .col_white,
    i {
        color: #3d348b;
        font-weight: bold;
    }
}


@mixin white-gradient {
    background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
}

$animationSpeed: 40s;

// Animation
@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-250px * 7))
    }
}


// Styling
.slider {
    background: white;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 100%;

    &::before,
    &::after {
        @include white-gradient;
        content: "";
        height: 50px;
        position: absolute;
        width: 10%;
        z-index: 2;
    }

    &::after {
        right: 0;
        top: 0;
        transform: rotateZ(180deg);
    }

    &::before {
        left: 0;
        top: 0;
    }

    .slide-track {
        animation: scroll $animationSpeed linear infinite;
        display: flex;
        width: calc(250px * 14);
    }

    .slide {
        height: 135px;
        width: 70%;
        max-width: 250px;
        padding: 0 5px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }

    @media screen and (max-width: 768px) {
        .slide {
            width: 90%;
        }
    }


}

.my_jumbo {
    background-color: $deliv-primary;

}

.my_title {
    font-size: 3.5rem;
    color: $deliv-elements;
    font-family: Arial, Helvetica, sans-serif;
}

span {
    font-size: 2.5rem;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: $deliv-elements;
}


section {
    background: $deliv-primary;
    padding: 50px 0;
}
</style>