<template>
  <div>
    <div class="row mt-5">
      <FilmeCard
        v-for="filme in filmes"
        :key="filme.id"
        :nome="filme.nome"
        :urlImagem="`/${filme.url_imagem}`"
        :status="filme.status"
        :adicionadoEm="filme.created_at"
        :assistidoEm="filme.assistido_em"
        :id="filme.id"
      />
    </div>
  </div>
</template>

<script>
import { Form } from '@inertiajs/vue3'
import FilmeCard from '../Utils/FilmeCard.vue';

export default {
    components: {
        Form,
        FilmeCard
    },
    props: {
        filmes: {
            type: Array
        }
    }
}
</script>
