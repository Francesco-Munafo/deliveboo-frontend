<script>
import AppCart from "../components/AppCart.vue";
export default {
    name: 'AppNavbar',
    data() {
        return {

        }
    },
    components: {
        AppCart,
    }
}


</script>


    <!-- <header class="bg_color navbar py-3 px-1 p-sm-3 p-lg-2" style="margin-bottom:-5px;">
        <div class="container-lg">
            <div class="d-none d-md-flex align-items-center">
                <img style="width: 80px" src="/src/assets/img/wired-lineal-13-pizza.gif" alt="pizza">
                <img style="width: 200px" src="/src/assets/img/logo1.png" alt="logo">
            </div>

            <div class="d-flex gap-3">
                <button class="d-none d-sm-block btn header-button">
                    <a class="col_select text-decoration-none" href="/">
                        <i class="fa-solid fa-house"></i> Home
                    </a>
                </button>


                 <button class="d-none d-sm-block btn header-button">
                    <a class="col_select text-decoration-none" href="#">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </a>
                </button> -->
                <!-- <AppCart></AppCart>


                <button class="btn header-registration-button">
                    <a class="col_white text-decoration-none" href="http://127.0.0.1:8000/login">
                        <i class="fa-solid fa-user"></i> area personale
                    </a>
                </button>
            </div>
        </div>
    </header> --> 

<template>
    <nav class="navbar navbar-expand-lg" style="background-color: #f7b801;">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <div class=" d-md-flex align-items-center">
                    <img style="width: 80px" src="/src/assets/img/wired-lineal-13-pizza.gif" alt="pizza">
                    <img style="width: 200px" src="/src/assets/img/logo1.png" alt="logo">
                </div>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <div class="d-flex gap-3 ms-auto">
                    <button class="d-none d-sm-block btn header-button">
                        <a class="col_select text-decoration-none" href="/">
                            <i class="fa-solid fa-house"></i> Home
                        </a>
                    </button>
                    <button class="btn header-registration-button me-3">
                        <a class="col_white text-decoration-none" href="http://127.0.0.1:8000/login">
                            <i class="fa-solid fa-user"></i> area personale
                        </a>
                    </button>
                </div>
                <button class="btn header-button col_select d-none d-sm-block" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        </div>
    </nav>
    <AppCart></AppCart>

    <!-- <div class="offcanvas offcanvas-end w-50 .offcanvas-md" tabindex="-1" id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">Carrello</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <AppCart></AppCart>
        </div>
    </div> -->

    <!-- <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight">Carrello</button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">Carrello</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <AppCart></AppCart>
        </div>
    </div> -->
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
    transition: all 0.5s ease;

    .col_select,
    i {
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-size: 15px;
        color: #3d348b;
        font-weight: bold;
    }
}

.header-button:hover {
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
    transition: all 0.5s ease;

    .col_white {
        letter-spacing: 1.5px;
        font-size: 15px;
        text-transform: uppercase;
        color: white;
    }
}

.header-registration-button:hover {
    background-color: white;
    box-shadow: rgb(93 24 220) 0px 7px 29px 0px;

    .col_white,
    i {
        color: #3d348b;
        font-weight: bold;
    }
}
</style>