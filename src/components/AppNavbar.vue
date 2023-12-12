<script>

export default {
    name: 'AppNavbar',
}


</script>


<template>
    <header class="bg_color navbar py-3 px-1 p-sm-3 pt-lg-2 pb-lg-0">
        <div class="container-lg">
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

                <button class="d-none d-sm-block btn header-button">
                    <a class="col_select text-decoration-none" href="#">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </a>
                </button>

                <button class="btn header-registration-button">
                    <a class="col_white text-decoration-none" href="http://127.0.0.1:8000/login">
                        <i class="fa-solid fa-user"></i> area personale
                    </a>
                </button>
            </div>
        </div>
    </header>
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