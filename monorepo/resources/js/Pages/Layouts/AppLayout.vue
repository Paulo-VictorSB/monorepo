<template>
  <div>
    <Header />
    <main class="container my-5 py-5">
      <div class="text-center">
        <button
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <i class="fa-solid fa-plus"></i> Adicionar filme
        </button>
      </div>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Adicionar filme
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <Form
                enctype="multipart/form-data"
                action="/cinelove/filmes"
                method="POST"
              >
                <div class="mb-3">
                  <label for="nome" class="form-label">Nome do filme</label>
                  <input
                    type="text"
                    class="form-control"
                    id="nome"
                    name="nome"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="imagem" class="form-label">Imagem</label>
                  <input
                    type="file"
                    class="form-control"
                    id="imagem"
                    name="imagem"
                    accept="image/*"
                  />
                </div>

                <div class="mb-3">
                  <label class="form-label d-block">Status</label>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      id="pendente"
                      name="status"
                      value="pendente"
                    />
                    <label class="form-check-label" for="pendente"
                      >Pendente</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      id="concluido"
                      name="status"
                      value="concluido"
                    />
                    <label class="form-check-label" for="concluido"
                      >Concluído</label
                    >
                  </div>
                </div>

                <div class="text-end">
                  <button type="submit" class="btn btn-primary">Salvar</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <slot />
    </main>
  </div>
</template>

<script>
import Header from "./Header.vue";
import { Form } from "@inertiajs/vue3";

export default {
  components: { Header, Form },
};
</script>
