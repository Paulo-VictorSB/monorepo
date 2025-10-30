import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjects } from '../dialog/dialog-projects/dialog-projects';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: "assets/img/projects/Encurtei.png",
      alt: "Logo do projeto Encurtei - Online",
      title: "Encurtei",
      width: "100px",
      height: "100px",
      description: "<p>O Encurtei é a melhor ferramenta gratuita para encurtar URLs no Brasil. Transforme links longos em URLs curtas, seguras e fáceis de compartilhar em redes sociais, WhatsApp, email e qualquer lugar.</p> <p>Um encurtador de URLs é uma ferramenta essencial para quem precisa compartilhar links de forma eficiente. O Encurtei oferece a melhor solução gratuita para transformar URLs longas em links curtos e memoráveis.</p>",
      links: [
        {
          name: "Conheça o projeto",
          href: "https://encurtei.online"
        },
      ]
    },
    {
      src: "assets/img/projects/Todolist.png",
      alt: "Logo do projeto Todolist",
      title: "Todolist",
      width: "100px",
      height: "100px",
      description: "<p>O Todolist é uma aplicação moderna e intuitiva desenvolvida em Angular para gerenciar suas tarefas do dia a dia. Organize suas atividades, adicione novos itens, marque como concluídos e mantenha o controle total da sua rotina de forma simples e eficiente.</p><p>Uma lista de tarefas é essencial para aumentar a produtividade e manter o foco. Com o Todolist, você conta com uma interface leve, responsiva e rápida — ideal para quem busca praticidade no gerenciamento de compromissos pessoais ou profissionais.</p>",
      links: [
        {
          name: "Conheça o projeto",
          href: "https://paulo-victorsb.github.io/to-do-list-angular/"
        },
      ]
    },
    {
      src: "assets/img/projects/Portifolio.png",
      alt: "Logo do projeto Portifólio",
      title: "Portifólio",
      width: "100px",
      height: "100px",
      description: "<p>O meu portfólio é uma aplicação moderna e responsiva desenvolvida em <strong>Angular</strong>, criada para apresentar habilidades e projetos reais na área de <strong>desenvolvimento web Full-Stack</strong>. Aqui você encontra uma vitrine digital com foco em tecnologias como PHP, Laravel, JavaScript, Vue, Angular, HTML5, CSS3 e Bootstrap.</p><p>Este portfólio foi projetado para destacar experiências, competências e soluções criadas ao longo da jornada como desenvolvedor. Navegue pelos projetos, baixe o currículo e entre em contato para conhecer mais sobre o trabalho e as soluções digitais que unem <strong>design, performance e funcionalidade</strong>.</p>",
      links: [
        {
          name: "Conheça o projeto",
          href: "https://paulo-victorsb.github.io/projeto-portifolio-angular/"
        },
      ]
    },
  ])

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjects, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
