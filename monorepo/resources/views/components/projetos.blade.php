<div class="container my-5" id="projetos" style="min-height: 90vh">
    <h1 class="text-center mb-5 text-light">Projetos</h1>

    <div class="row g-4">
        <template v-for="(projeto, index) in projetos">
            <div class="col-md-6">
                <div class="card h-100 shadow-sm bg-dark text-light">
                    <img :src="projeto.imageUrl" class="card-img-top" alt="Imagem do projeto">
                    <div class="card-body">
                        <h5 class="card-title">@{{ projeto.nome }}</h5>
                        <p class="card-text">
                            @{{ projeto.descricao }}
                        </p>
                        <p>
                            <template v-for="tecnologia in projeto.tecnologias">
                                <a href="" class="btn btn-outline-light me-2 mt-2">
                                    @{{ tecnologia.toUpperCase()  }}
                                </a>
                            </template>
                        </p>
                    </div>
                    <div class="card-footer">
                        <div class="row">
                            <div class="col col-md-6 col-lg-6">
                                <a :href="projeto.linkProjeto" class="btn btn-outline-light w-100" target="_blank">Ver Site</a>
                            </div>
                            <div class="col col-md-6 col-lg-6">
                                <a :href="projeto.linkRepo" class="btn btn-outline-light w-100" target="_blank">Repositório</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <div class="col">
            <a :href="links[0].github" target="_blank" class="btn btn-dark d-flex align-items-center border-white">
                    <i class="fab fa-github me-2"></i> Veja mais no meu github!
            </a>
        </div>
    </div>
</div>
