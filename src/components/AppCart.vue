<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
    name: "AppCart",
    data() {
        return {
            FontAwesomeIcon,
        };
    },
};
</script>

<template>
    <!-- <button class="btn header-button col_select d-none d-sm-block" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><font-awesome-icon
            icon="fa-solid fa-cart-shopping" /> -->

        <div class="offcanvas offcanvas-end w-50 .offcanvas-md" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Carrello</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">

                <div class="container my-5">
                    <h1 class="mb-4">Carrello</h1>
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Prodotto</th>
                                    <th scope="col">Prezzo</th>
                                    <th scope="col">Quantità</th>
                                    <th scope="col">Totale</th>
                                    <th scope="col">Azione</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>


                                        <div class="media-body">
                                            <h5 class="mt-0">Nome Prodotto</h5>
                                        </div>

                                    </td>
                                  
                                    <td>€ Prezzo</td>
                                    <td>
                                        <input type="number" class="form-control" value="1" min="0">
                                    </td>
                                    <td>€ Totale</td>
                                    <td>
                                        <button class="btn btn-danger">Rimuovi</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="row">
                        <div class="col-md-4 order-md-2 mb-4">
                            <h4 class="d-flex justify-content-between align-items-center mb-3">
                                <span class="text-muted">Il tuo totale</span>
                                <span class="badge badge-secondary badge-pill">3</span>
                            </h4>
                            <ul class="list-group mb-3">
                                <li class="list-group-item d-flex justify-content-between">
                                    <span>Subtotale (EUR)</span>
                                    <strong>€ Subtotale</strong>
                                </li>
                                <li class="list-group-item d-flex justify-content-between">
                                    <span>Spedizione</span>
                                    <strong>€ Costo Spedizione</strong>
                                </li>
                                <li class="list-group-item d-flex justify-content-between">
                                    <span>Totale (EUR)</span>
                                    <strong>€ Totale</strong>
                                </li>
                            </ul>


                            <button class="btn btn-primary btn-lg btn-block" type="submit">Procedi al Checkout</button>
                        </div>
                        <div class="col-md-8 order-md-1">
                            <button class="btn btn-link btn-sm">Continua lo shopping</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    <!-- </button> -->
</template>

<style scoped>
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


@media (max-width: 576px) {
    #offcanvasRight {
        width: 100%;
    }
}

</style>
