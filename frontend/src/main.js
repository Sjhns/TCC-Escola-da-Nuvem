const arr = [
    {
        title: "Desenvolvedor Full Stack .NET e Angular - com experiência",
        description: "Você irá participar do processo de migração nos sistemas da empresa atuando com tecnologias mais atuais tendo muito espaço para trazer as melhores práticas de programação"
    },
    {
        title: "Pessoa Desenvolvedora JAVA (PCD)",
        description: "A Accenture é uma empresa global de serviços profissionais líder em soluções para digital, nuvem e segurança. Combinando experiência incomparável e habilidades especializadas em mais de 40 setores, oferecemos serviços nas seguintes áreas: Strategy & Consulting, Interactive, Technology e Operations. "
    },
    {
        title: "Desenvolvedor Drupal - Trabalho Remoto",
        description: "A Bairesdev tem orgulho de ser a empresa que mais cresce nas Américas. Nossos times são formados por pessoas do mundo todo e somos tão fortes quanto nossas equipes multiculturais. Para entregar consistentemente as soluções da mais alta qualidade, contratamos apenas o 1% entre os melhores talentos e os desafiamos em projetos empolgantes."
    },
    {
        title: "Desenvolvedor Android - Trabalho Remoto",
        description: "A Bairesdev tem orgulho de ser a empresa que mais cresce nas Américas. Nossos times são formados por pessoas do mundo todo e somos tão fortes quanto nossas equipes multiculturais. Para entregar consistentemente as soluções da mais alta qualidade, contratamos apenas o 1% entre os melhores talentos e os desafiamos em projetos empolgantes."
    },
    {
        title: "Desenvolvedor Salesforce Sr.",
        description: "Somos a maior multinacional brasileira e estamos entre as 100 maiores empresas de TI do mundo."
    },
    {
        title: "Desenvolvedor (a) Java Sr - Home Office",
        description: "Somos uma das maiores multinacionais brasileiras e estamos entre as 100 maiores empresas de TI do mundo"
    },
    {
        title: "Desenvolvedor de Sistemas",
        description: "Será responsável por desenvolver, projetar, analisar, implementar e realizar a manutenção de sistemas de informação de diversos setores."
    },
    {
        title: "Desenvolvedor de Salesforce - Trabalho Remoto",
        description: "A Bairesdev tem orgulho de ser a empresa que mais cresce nas Américas. Nossos times são formados por pessoas do mundo todo e somos tão fortes quanto nossas equipes multiculturais. Para entregar consistentemente as soluções da mais alta qualidade, contratamos apenas o 1% entre os melhores talentos e os desafiamos em projetos empolgantes."
    },
    {
        title: "Programador Júnior - T.I - Grupo Servopa",
        description: "Responsável pela programação de ferramentas Web."
    },
    {
        title: "Desenvolvedor(a) Front End",
        description: "ONG com 600 funcionários que atende com Saúde, Educação e Moradia à pessoas com múltiplas deficiências."
    },
    {
        title: "Trainee Tester",
        description: "Somos incansáveis na busca pelo novo, buscamos superar nossos limites para surpreender nossos clientes, por isso não paramos de aprender e não descansamos enquanto tivermos perguntas não respondidas para nossos soluções."
    },
    {
        title: "DESENVOLVEDOR FULL STACK (Node.js + React)",
        description: "Seja em áreas de mobilidade, bens de consumo, tecnologia industrial, energia e de construção ou no desenvolvimento de novos modelos de negócios: A Bosch faz uma contribuição decisiva para melhorar a qualidade de vida desta geração e das que virão. Isto só é possível com um network global de mais de 410 mil colaboradores altamente comprometidos, que quebram barreiras todos os dias."
    },
    {
        title: "Desenvolvedor C++ - Trabalho Remoto",
        description: "A Bairesdev tem orgulho de ser a empresa que mais cresce nas Américas. Nossos times são formados por pessoas do mundo todo e somos tão fortes quanto nossas equipes multiculturais. Para entregar consistentemente as soluções da mais alta qualidade, contratamos apenas o 1% entre os melhores talentos e os desafiamos em projetos empolgantes."
    },
    {
        title: "Back-end web developer",
        description: "Responsible for building the backend system with the lead architect on AWS. Your primary focus will be development of all server-side logic, definition and maintenance of the cloud infrastructure, central database, and ensuring high performance and responsiveness to requests from the front-end. You will also be responsible for integrating the front-end elements built by your coworkers into the application. A basic understanding of front-end technologies is therefore necessary as well."
    },
    {
      title: "Desenvolvedor Javascript - Trabalho Remoto",
      description: "A Bairesdev tem orgulho de ser a empresa que mais cresce nas Américas. Nossos times são formados por pessoas do mundo todo e somos tão fortes quanto nossas equipes multiculturais. Para entregar consistentemente as soluções da mais alta qualidade, contratamos apenas o 1% entre os melhores talentos e os desafiamos em projetos empolgantes."
  }
    
];

const cardsContainer = document.getElementById('cards-container');

const cardsHTML = arr.map(element => `
<div
class="max-w-sm w-full p-6 pt-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-[1.05]"
>
<div class="flex mb-[1rem] md:items-center md:justify-between ">
<span class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
  <svg aria-hidden="true" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
  2 minutes ago
</span>

<span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">empresa parceira</span>

<span class="inline-flex items-center p-1 mr-2 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full dark:bg-gray-700 dark:text-blue-400">
  <svg aria-hidden="true" class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Icon description</span>
</span>

</div>
<span >
  <h5
    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
  >
  ${element.title}
  </h5>
</span>
<p class="mb-3 w-full font-normal text-gray-700 dark:text-gray-400  truncate line-clamp-3 ">
${element.title}
</p>
<a
  href="./registro.html"
  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
  Candidata-se
  <svg
    aria-hidden="true"
    class="w-4 h-4 ml-2 -mr-1"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clip-rule="evenodd"
    ></path>
  </svg>
</a>
</div>
`).join('');

cardsContainer.innerHTML = cardsHTML;