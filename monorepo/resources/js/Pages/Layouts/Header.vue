<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top">
    <div class="container">
      <Link class="navbar-brand text-light fw-bold" href="/cinelove">CineLove</Link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <Link class="nav-link text-light" href="/cinelove">Início</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-light" href="/cinelove/assistidos">Assistidos</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-light" href="/cinelove/pendentes">Pendentes</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { Link } from "@inertiajs/vue3";

export default {
  components: { Link },
};
</script>

<style scoped>
.navbar {
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  color: #ffc107 !important;
}
</style>
