import axios from 'axios';

window.axios = axios;

// CSRF token para rotas web
window.axios.defaults.headers.common['X-CSRF-TOKEN'] =
    document.querySelector('meta[name="csrf-token"]').getAttribute('content');

new Vue({
    el: "#app",
    data: {
        informacoes_pessoais: [
            {
                nome: "Paulo Barbosa",
                titulos: [
                    "Desenvolvedor Web Fullstack",
                    "Laravel",
                    "VueJS",
                    "Bootstrap",
                    "MySQL"
                ],
                resumo: "Iniciei minha jornada no desenvolvimento web como freelancer, onde consolidei e ampliei minhas habilidades em front-end e back-end. Atualmente, estou em um processo de transição de carreira, buscando me estabelecer de forma sólida como desenvolvedor web. Nos últimos meses, atuei intensivamente como freelancer, entregando soluções completas e personalizadas para clientes.",
                foto_perfil: '{{ asset("assets/images/paulo-barbosa-perfil.png") }}'
            }
        ],
        displayedText: "",
        wordIndex: 0,
        charIndex: 0,
        typingSpeed: 100,
        pauseBetweenWords: 1000,
        links: [
            { linkedin: "https://www.linkedin.com/in/paulo-victorsb/", github: "https://github.com/Paulo-VictorSB" }
        ],
        tecnologias: [
            'html',
            'css',
            'javascript',
            'bootstrap',
            'vue',
            'php',
            'laravel',
            'git',
            'github',
        ],
        tecnologiaLogos: {
            html: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg",
            css: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg",
            javascript: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg",
            bootstrap: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bootstrap.svg",
            vue: "https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/vuedotjs.svg",
            php: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/php.svg",
            laravel: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/laravel.svg",
            git: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg",
            github: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
        },
        currentTranslate: 0,
        itemWidth: 0,
        speed: 0.6,
        interval: null,
        formacao: [
            {
                nome: "Analise e desenvolvimento de sistemas",
                instituicao: "unifg",
                data: "11/24 a 05/27",
                descricao: "O curso de Análise e Desenvolvimento de Sistemas da UNIFG é uma graduação tecnológica voltada à formação de profissionais para atuar em desenvolvimento de software, programação, análise de sistemas e gestão de bancos de dados. O objetivo é preparar os alunos com conhecimentos teóricos e práticos para o mercado de tecnologia da informação.",
                link: "https://landing.unifg.edu.br/curso/analise-e-desenvolvimento-de-sistemas-tecnologo?utm_source=google&utm_medium=cpc&utm_campaign=UNIFG-PE|GRAD|TODOS|PMAX-EDUCACAO-252|02|05|01|08|&utm_term=cpc&utm_content=ads&gclsrc=aw.ds&gad_source=1&gad_campaignid=21768680317&gbraid=0AAAAADn9KEptimLhYkv0dwMvpE0vnTR6J&gclid=Cj0KCQjww4TGBhCKARIsAFLXndReoQFUsDgXaFdgjZ6r51CBUFjikGBVmfwkDiRKsZ4B8Tpcv4CAh7QaAp6AEALw_wcB"
            },
            {
                nome: "Desenvolvimento Web Compacto e Completo",
                instituicao: "udemy",
                data: "06/24 a 06/25",
                descricao: "Curso completo de desenvolvimento web que ensina do básico ao avançado todas as principais tecnologias: HTML5, CSS3, JavaScript, PHP 8, OOP, MySQL, REST APIs, AJAX, Bootstrap 5, GIT & GitHub, NodeJS, CodeIgniter 4, Laravel 10, hospedagem e gestão de servidores com cPanel. Ideal para iniciantes e para quem deseja se tornar um desenvolvedor web profissional, com muitos exercícios práticos e projetos reais.",
                link: "https://www.udemy.com/course-dashboard-redirect/?course_id=5107432"
            },
            {
                nome: "Laravel 11 & 12: Framework, Ecossistema e Projetos Web",
                instituicao: "Udemy",
                data: "07/24 a 12/25",
                descricao: "Curso completo de Laravel que ensina desde o básico até avançado. O aluno aprende a criar aplicações web e APIs, trabalhar com Blade, Eloquent ORM, MySQL/SQLite, autenticação e autorização, Laravel Livewire, Sanctum, Cashier + Stripe, além de deploy em produção. Ideal para quem deseja se tornar profissional em desenvolvimento com Laravel.",
                link: "https://www.udemy.com/course-dashboard-redirect/?course_id=6134467"
            },
            {
                nome: "Desenvolvimento Web Avançado com Vue (v2 e v3) e Vuex",
                instituicao: "Udemy",
                data: "07/24 a 12/25",
                descricao: "Curso avançado de Vue.js que aborda criação de aplicações modernas com componentes reutilizáveis, Vue CLI, Vue Router, Vuex, animações e deploy em Heroku. Inclui conceitos de Vue 2 e Vue 3, gerenciamento de estado, diretivas, lifecycle hooks, formulários, máscaras de input e integração com Electron. Ideal para quem deseja se especializar em front-end moderno com Vue.",
                link: "https://www.udemy.com/course-dashboard-redirect/?course_id=4010970"
            }
        ],
        projetos: [
            {
                nome: "PapoLive",
                descricao: "PapoLive é um sistema de chat em tempo real que permite a criação de usuários e salas com ou sem senha, garantindo segurança e privacidade. Desenvolvido com PHP (API RESTful), JavaScript (Fetch/AJAX), Bootstrap e MySQL, o sistema oferece uma experiência fluida e responsiva, com gerenciamento de sessões e interface intuitiva para qualquer dispositivo.",
                imageUrl: "assets/images/PapoLive.png",
                linkProjeto: "https://pbarbosaprojetos.byethost31.com/",
                linkRepo: "https://github.com/Paulo-VictorSB/PapoLive",
                tecnologias: [
                    "php", "Ajax", "Css", "bootstrap", "mysql", "apirestful"
                ]
            },
            {
                nome: "Encurtei",
                descricao: "Encurtei é um encurtador de links 100% gratuito, criado para facilitar o compartilhamento de URLs de forma rápida, segura e profissional. Com encurtamento instantâneo, links personalizáveis e suporte a HTTPS, a ferramenta funciona sem cadastro e garante links permanentes — ideais para campanhas, QR Codes, redes sociais e muito mais.",
                imageUrl: "assets/images/Encurtei.png",
                linkProjeto: "https://encurtei.online/",
                linkRepo: "https://github.com/Paulo-VictorSB/encurtei",
                tecnologias: [
                    "php", "Ajax", "Css", "bootstrap", "mysql", "apirestful"
                ]
            },
            {
                nome: "KeyWorlds",
                descricao: "KeyWorlds é um jogo desenvolvido para testar e aprimorar sua digitação e reconhecimento de caracteres. O desafio consiste em digitar corretamente as sequências exibidas na tela, compostas por letras maiúsculas, minúsculas, números e caracteres especiais. Não há tempo limite, mas a variedade de caracteres torna a experiência desafiadora e envolvente!",
                imageUrl: "assets/images/KeyWorlds.png",
                linkProjeto: "https://keyworlds.byethost32.com/?route=index",
                linkRepo: "https://github.com/Paulo-VictorSB/KeyWorldsApp",
                tecnologias: [
                    "php", "jquery", "Css", "bootstrap", "mysql", "mvc"
                ]
            },
            {
                nome: "WeatherApp",
                descricao: "O Weather-App é um projeto desenvolvido com HTML, CSS e JavaScript, que utiliza uma API gratuita de previsão do tempo para fornecer informações atualizadas sobre o clima. O aplicativo permite ao usuário consultar a temperatura, condições climáticas e outros dados relevantes de qualquer cidade de forma prática e intuitiva.",
                imageUrl: "assets/images/WeatherApp.png",
                linkProjeto: "https://paulo-victorsb.github.io/Weather-App/",
                linkRepo: "https://github.com/Paulo-VictorSB/Weather-App",
                tecnologias: [
                    "html", "css", "javascript", "api"
                ]
            },
        ]
    },
    mounted() {
        this.typeWriter();
        this.$nextTick(() => {
            this.calculateItemWidth();
            this.startCarousel();
            window.addEventListener('resize', this.calculateItemWidth);
        });
    },
    beforeDestroy() {
        this.stopCarousel();
        window.removeEventListener('resize', this.calculateItemWidth);
    },
    computed: {
        tecnologiasLoop() {
            return [...this.tecnologias, ...this.tecnologias];
        }
    },
    methods: {
        typeWriter() {
            const currentWord = this.informacoes_pessoais[0].titulos[this.wordIndex];

            if (this.charIndex < currentWord.length) {
                this.displayedText += currentWord[this.charIndex];
                this.charIndex++;
                setTimeout(this.typeWriter, this.typingSpeed);
            } else {
                setTimeout(this.eraseText, this.pauseBetweenWords);
            }
        },
        eraseText() {
            if (this.charIndex > 0) {
                this.displayedText = this.displayedText.slice(0, -1);
                this.charIndex--;
                setTimeout(this.eraseText, this.typingSpeed / 2);
            } else {
                this.wordIndex = (this.wordIndex + 1) % this.informacoes_pessoais[0].titulos.length;
                setTimeout(this.typeWriter, this.typingSpeed);
            }
        },
        startCarousel() {
            setInterval(() => {
                this.currentTranslate += this.speed;
                const totalWidth = this.itemWidth * this.tecnologias.length;

                if (this.currentTranslate >= totalWidth) {
                    this.currentTranslate = 0;
                }
            }, 20);
        },
        calculateItemWidth() {
            this.$nextTick(() => {
                const first = this.$refs.items && this.$refs.items[0];
                if (!first) return;
                const style = getComputedStyle(first);
                const mr = parseFloat(style.marginRight) || 0;
                this.itemWidth = Math.round(first.offsetWidth + mr);
            });
        },
        startCarousel() {
            this.stopCarousel();
            this.interval = setInterval(() => {
                this.currentTranslate += this.speed;
                const totalWidth = this.itemWidth * this.tecnologias.length;

                if (this.currentTranslate >= totalWidth) {
                    this.currentTranslate -= totalWidth;
                }
            }, 16);
        },
        stopCarousel() {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        },
        pauseCarousel() {
            this.stopCarousel();
        },
        resumeCarousel() {
            if (!this.interval) this.startCarousel();
        },
        sendToWhatsapp() {
            let nome = nomeInput.value;
            let email = emailInput.value;
            let mensagem = mensagemInput.value;
            let texto = `*Nome*: ${nome}, %0A*Email*: ${email}, %0A*Mensagem*: ${mensagem}`;

            let url = `https://wa.me/5581999906183?text=${texto}`;
            window.open(url, '_blank');
        }
    }
})
