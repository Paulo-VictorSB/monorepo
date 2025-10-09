<div class="container my-5" id="contato">
    <div class="row">
        <div class="col-md-4">
            <div class="card bg-dark text-light shadow-lg">
                <div class="card-body">
                    <h4 class="card-title mb-3">Informações de Contato</h4>
                    <p><strong>Email:</strong> paulovdbarbosa@gmail.com</p>
                    <p><strong>Telefone:</strong> (81) 99990-8183</p>
                    <p><strong>LinkedIn:</strong>
                        <a :href="links[0].linkedin" target="_blank" class="text-info"> @{{ links[0].linkedin }}</a>
                    </p>
                    <p><strong>GitHub:</strong>
                        <a :href="links[0].github" target="_blank" class="text-info">@{{ links[0].github }}</a>
                    </p>
                </div>
            </div>
        </div>

        <div class="col-md-8">
            <div class="card bg-dark text-light shadow-lg">
                <div class="card-body">
                    <h4 class="card-title mb-3">Entre em Contato</h4>
                    <form @submit.prevent="sendToWhatsapp()" id="whatsappForm">
                        <div class="mb-3">
                            <label for="nome" class="form-label">Nome</label>
                            <input type="text" class="form-control" id="nomeInput" placeholder="Digite seu nome" required>
                        </div>
                        <div class="mb-3">
                            <label for="emailInput" class="form-label">Email</label>
                            <input type="email" class="form-control" id="emailInput" placeholder="Digite seu email" required>
                        </div>
                        <div class="mb-3">
                            <label for="mensagem" class="form-label">Mensagem</label>
                            <textarea class="form-control" id="mensagemInput" rows="4" placeholder="Escreva sua mensagem" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-success w-100">
                            <i class="fa-brands fa-whatsapp"></i> Enviar via WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
