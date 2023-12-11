<script>

export default {
    name: 'AppNavbar',
}


</script>


<template>

<div class="my_navbar">
        <nav class="navbar navbar-expand-lg  d-flex justify-content-around">
            <div>

                <a class="navbar-brand" href="#"><span>DeliveBoo</span></a>

            </div>

            <div>

                <button class="btn5" type="submit">Login</button>

            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;



.my_navbar {
    background-color: $deliv-primary;
}


.btn5 {
    display: inline-block;
    padding: 0.7em 1.4em;
    margin: 0 0.3em 0.3em 0;
    border: none;
    border-radius: 0.5em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'arial';
    text-transform: uppercase;
    font-weight: 400;
    color: #FFFFFF;
    background-color: $deliv-elements;
    box-shadow: inset 0 -0.6em 0 -0.3em rgba(0, 0, 0, 0.20);
    text-align: center;
    position: relative;
    cursor: pointer;
}

.btn5:hover {
    background: #E64B3E;
}

.btn5:active {
    background: #D7372A;
    top: 0.15em;
    color: #D9D9D9;
    box-shadow: none;
}


span {
    font-size: 2.5rem;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: $deliv-elements;
}


</style>