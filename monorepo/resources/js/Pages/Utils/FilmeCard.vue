<template>
  <div class="col-md-4 col-sm-6 mb-4">
    <div class="card h-100 shadow border-0 bg-dark text-white">
      <img
        :src="urlImagem"
        class="card-img-top"
        :alt="`Capa do filme ${nome}`"
        style="object-fit: cover; "
      />

      <div class="card-body">
        <h5 class="card-title text-truncate" title="nome">{{ nome }}</h5>

        <span
          class="badge"
          :class="statusBadgeClass"
        >
          {{ statusLabel }}
        </span>

        <div class="mt-3 small text-white">
          <p v-if="adicionadoEm">
            <i class="fa-regular fa-calendar-plus me-1"></i>
            Adicionado em: {{ formatDate(adicionadoEm) }}
          </p>
          <p v-if="assistidoEm">
            <i class="fa-regular fa-circle-check me-1"></i>
            Assistido em: {{ formatDate(assistidoEm) }}
          </p>
        </div>
      </div>

      <div v-if="status == 'pendente'">
        <Form action="/cinelove/assistido" method="POST">
            <input type="hidden" name="id" :value="id">
            <button class="btn btn-success w-100">Concluir</button>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { Form } from '@inertiajs/vue3';

export default {
  name: "FilmeCard",
  props: {
    id: {
        type: Number,
        required: true
    },
    nome: {
      type: String,
      required: true,
    },
    urlImagem: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      validator: (v) => ["pendente", "concluido"].includes(v),
    },
    adicionadoEm: {
      type: String,
      required: false,
    },
    assistidoEm: {
      type: String,
      required: false,
    },
  },
  computed: {
    statusBadgeClass() {
      return this.status === "concluido"
        ? "bg-success"
        : "bg-warning text-dark";
    },
    statusLabel() {
      return this.status === "concluido" ? "Assistido" : "Pendente";
    },
  },
  methods: {
    formatDate(date) {
      const d = new Date(date);
      return d.toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      });
    },
  },
  components: {
    Form
  }
};
</script>

<style scoped>
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}
</style>
