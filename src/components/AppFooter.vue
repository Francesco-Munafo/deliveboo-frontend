<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "AppFooter",
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <footer class="p-3">
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-4">
        <div class="col-12 col-md-6 col-lg-3 mb-3 text-center">
          <img src="../assets/img/cicogna-spatola.png" class="img-fluid w-50" />
        </div>

        <div class="col-12 col-md-6 col-lg-3 mb-3 pt-4">
          <h5>Discover us</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a
                href="#"
                class="nav-link p-0 text-body-secondary custom-hover text-danger"
                >Investors</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >Careers</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >About us</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >Services</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >Restaurant signup</a
              >
            </li>
          </ul>
        </div>

        <div class="col-12 col-md-6 col-lg-3 mb-3 pt-4">
          <h5>Legal</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >Terms and conditions</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >Privacy</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >Cookies</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >Public Authority Requests</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >Our Policy</a
              >
            </li>
          </ul>
        </div>

        <div class="col-12 col-md-6 col-lg-3 mb-3 pt-4">
          <h5>Help</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >Contacts</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >FAQs</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >Cuisine</a
              >
            </li>

            <div class="col-12 col-md-6 col-lg-3 mb-3 pt-4">
              <!-- Sezione Follow Us -->
              <h5>Follow us</h5>
              <div class="text-nowrap">
                <a href="https://www.facebook.com" class="me-2"
                  ><font-awesome-icon icon="fa-brands fa-facebook-f"
                /></a>
                <a href="https://www.twitter.com" class="mx-2"
                  ><font-awesome-icon icon="fa-brands fa-twitter"
                /></a>
                <a href="https://www.instagram.com" class="mx-2"
                  ><font-awesome-icon icon="fa-brands fa-instagram"
                /></a>
                <a href="https://www.youtube.com" class="mx-2">
                  <font-awesome-icon icon="fa-brands fa-youtube"
                /></a>
              </div>
            </div>
          </ul>
        </div>

        <!-- line break -->
        <hr class="w-100" />

        <!-- bottom footer -->
        <div class="container-fluid">
          <p class="text-body-secondary">Deliveboo | © 2023</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.fa-facebook-f {
  color: #4267b2;
}

.fa-twitter {
  color: #1da1f2;
}

.fa-instagram {
  color: black;
}

.fa-youtube {
  color: #ff0000;
}

.fa-facebook-f,
.fa-twitter,
.fa-instagram,
.fa-youtube {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.fa-facebook-f:hover,
.fa-twitter:hover,
.fa-instagram:hover,
.fa-youtube:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.custom-hover:hover {
  text-shadow: -1px -1px 1px #111, 1px 1px 1px #fff;
}

@media (max-width: 576px) {
  .row {
    text-align: center;
  }
}
</style>
