
// Colocar todo o texto necesário para os modulos aqui, incluindo a introdução e as atividades de cada módulo
// Para utilizar as imagens deste ficheiro temos de colocar em public/imgs/ e depois colocar o caminho como "../imgs/module1.jpg"

const modulos = [
    {
      id: "1",
      imagem: "../imgs/module1.jpg",
      titulo: "Módulo 1",
      subtitulo: "Ansiedade NÃO é bicho-papão!",
      descricao: "Aprende a diferenciar entre uma ansiedade comum e uma ansiedade SOS",
      introducao: `Todos nós sentimos ansiedade – e isso é perfeitamente normal! Aqui, vais compreender melhor as emoções e como elas influenciam o nosso dia a dia.

      Além disso, vais aprender a distinguir entre uma ansiedade comum e uma ansiedade SOS que causa sofrimento.`,
            atividades: [
        {
          url: "banda-desenhada",
          titulo: "Ansiedade: Aliada ou Empecilho?",
          tipo: "texto",
          descricao: "Banda desenhada que explica ansiedade comum vs. SOS.",
          imagem: "../imgs/act1mod1.jpg",
          quadros: [
            {
              rapariga: "Olá, como estás? Pareces pensativo?",
              rapaz: "Olá estou bem e tu? Ah, estava só a pensar nas coisas que tenho de fazer hoje..."
            },
            {
              rapariga: "A ansiedade é uma resposta natural.",
              rapaz: "Mas às vezes ela atrapalha."
            },
            {
              rapariga: "Ansiedade comum ajuda. É temporária.",
              rapaz: "Então é como um empurrãozinho!"
            },
            {
              rapariga: "Ansiedade SOS dura mais e é mais forte.",
              rapaz: "Parece que nunca vai embora…"
            },
            {
              rapariga: "A comum desaparece depois da situação.",
              rapaz: "A SOS fica e atrapalha mais tempo."
            },
            {
              rapaz: "A ansiedade SOS afeta muito a vida…",
              rapariga: "É por isso que precisamos saber a diferença!"
            }
          ],
        },
        {
          url: "linha-ansiedade",
          titulo: "Linha da Ansiedade",
          tipo: "popup",
          descricao: "Explora ansiedade normativa vs. patológica numa situação.",
          imagem: "../imgs/act2mod1.jpg"
        },
        {
          url: "unindo-experiencias",
          titulo: "Unindo Experiências",
          tipo: "video",
          descricao: "Vídeo com relatos reais sobre ansiedade.",
          imagem: "../imgs/act3mod1.jpg"
        },
        {
          url: "ansiedade-sem-filtros",
          titulo: "Ansiedade sem Filtros",
          tipo: "imagem",
          descricao: "Imagens estilo Instagram sobre ansiedade na adolescência.",
          imagem: "../imgs/act4mod1.jpg"
        },
        {
          url: "atividade-resumo",
          titulo: "Atividade Resumo",
          tipo: "quiz",
          descricao: "Cenários interativos sobre lidar com ansiedade.",
          imagem: "../imgs/act5mod1.jpg"
        }
      ],
    },
    {
        id: "2",
        imagem: "../imgs/module2.jpg",
        titulo: "Módulo 2",
        subtitulo: "Desmitificar a Ansiedade ",
        descricao: "Nem tudo o que dizem sobre a ansiedade é verdade!",
        introducao: "Todos nós sentimos ansiedade – e isso é perfeitamente normal! Aqui, vais compreender melhor as emoções, como elas influenciam o nosso dia a dia e aprender a distinguir entre uma ansiedade comum e uma ansiedade SOS que causa sofrimento.",
        atividades: [
          {
            url: "banda-desenhada",
            titulo: "Ansiedade: Aliada ou Empecilho?",
            tipo: "texto",
            descricao: "Banda desenhada que explica ansiedade comum vs. SOS.",
            imagem: "../imgs/module1.jpg"
          },
          {
            url: "linha-ansiedade",
            titulo: "Linha da Ansiedade",
            tipo: "popup",
            descricao: "Explora ansiedade normativa vs. patológica numa situação.",
            imagem: "../imgs/module1.jpg"
          },
          {
            url: "unindo-experiencias",
            titulo: "Unindo Experiências",
            tipo: "video",
            descricao: "Vídeo com relatos reais sobre ansiedade.",
            imagem: "../imgs/module1.jpg"
          },
          {
            url: "ansiedade-sem-filtros",
            titulo: "Ansiedade sem Filtros",
            tipo: "imagem",
            descricao: "Imagens estilo Instagram sobre ansiedade na adolescência.",
            imagem: "../imgs/module1.jpg"
          },
        ],
    },
    {
        id: "3",
        imagem: "../imgs/module3.jpg",
        titulo: "Módulo 3",
        subtitulo: "Sê amigo de ti mesmo! ",
        descricao: "O que dizes a ti próprio faz a diferença!",
        introducao: "Todos nós sentimos ansiedade – e isso é perfeitamente normal! Aqui, vais compreender melhor as emoções, como elas influenciam o nosso dia a dia e aprender a distinguir entre uma ansiedade comum e uma ansiedade SOS que causa sofrimento.",
        atividades: [
          {
            url: "banda-desenhada",
            titulo: "Ansiedade: Aliada ou Empecilho?",
            tipo: "texto",
            descricao: "Banda desenhada que explica ansiedade comum vs. SOS.",
            imagem: "../imgs/module1.jpg"
          },
          {
            url: "linha-ansiedade",
            titulo: "Linha da Ansiedade",
            tipo: "popup",
            descricao: "Explora ansiedade normativa vs. patológica numa situação.",
            imagem: "../imgs/module1.jpg"
          },
          {
            url: "unindo-experiencias",
            titulo: "Unindo Experiências",
            tipo: "video",
            descricao: "Vídeo com relatos reais sobre ansiedade.",
            imagem: "../imgs/module1.jpg"
          },
          {
            url: "ansiedade-sem-filtros",
            titulo: "Ansiedade sem Filtros",
            tipo: "imagem",
            descricao: "Imagens estilo Instagram sobre ansiedade na adolescência.",
            imagem: "../imgs/module1.jpg"
          },
        ],
    },
    {
        id: "4",
        imagem: "../imgs/module4.jpg",
        titulo: "Módulo 4",
        subtitulo: "O Poder da Mudança!",
        descricao: "A mudança faz parte da vida! Explora os diferentes estádios da mudança, aprende a definir objetivos realistas e descobre como dar pequenos passos pode fazer uma grande diferença.",
        introducao: "Todos nós sentimos ansiedade – e isso é perfeitamente normal! Aqui, vais compreender melhor as emoções, como elas influenciam o nosso dia a dia e aprender a distinguir entre uma ansiedade comum e uma ansiedade SOS que causa sofrimento.",
        atividades: [
          {
            url: "banda-desenhada",
            titulo: "Ansiedade: Aliada ou Empecilho?",
            descricao: "Banda desenhada que explica ansiedade comum vs. SOS.",
            imagem: "../imgs/module1.jpg"
          },
          {
            url: "linha-ansiedade",
            titulo: "Linha da Ansiedade",
            descricao: "Explora ansiedade normativa vs. patológica numa situação.",
            imagem: "../imgs/module1.jpg"
          },
          {
            url: "unindo-experiencias",
            titulo: "Unindo Experiências",
            descricao: "Vídeo com relatos reais sobre ansiedade.",
            imagem: "../imgs/module1.jpg"
          },
          {
            url: "ansiedade-sem-filtros",
            titulo: "Ansiedade sem Filtros",
            descricao: "Imagens estilo Instagram sobre ansiedade na adolescência.",
            imagem: "../imgs/module1.jpg"
          },
        ],
    }, 
    {
        id: "5",
        imagem: "../imgs/module5.jpg",
        titulo: "Módulo 5",
        subtitulo: "Reviravolta em Rede!",
        descricao: "Pedir ajuda pode parecer difícil, mas não estás sozinho. Aprende a identificar sinais de alerta, a diferenciar entre ajuda formal e informal e descobre como a ajuda das pessoas mais próximas podem fazer toda a diferença.",
        introducao: "Todos nós sentimos ansiedade – e isso é perfeitamente normal! Aqui, vais compreender melhor as emoções, como elas influenciam o nosso dia a dia e aprender a distinguir entre uma ansiedade comum e uma ansiedade SOS que causa sofrimento.",
        atividades: [
          {
            url: "banda-desenhada",
            titulo: "Ansiedade: Aliada ou Empecilho?",
            tipo: "texto",
            descricao: "Banda desenhada que explica ansiedade comum vs. SOS.",
            imagem: "../imgs/module1.jpg"
          },
          {
            url: "linha-ansiedade",
            titulo: "Linha da Ansiedade",
            tipo: "popup",
            descricao: "Explora ansiedade normativa vs. patológica numa situação.",
            imagem: "../imgs/module1.jpg"
          },
          {
            url: "unindo-experiencias",
            titulo: "Unindo Experiências",
            tipo: "video",
            descricao: "Vídeo com relatos reais sobre ansiedade.",
            imagem: "../imgs/module1.jpg"
          },
          {
            url: "ansiedade-sem-filtros",
            titulo: "Ansiedade sem Filtros",
            tipo: "imagem",
            descricao: "Imagens estilo Instagram sobre ansiedade na adolescência.",
            imagem: "../imgs/module1.jpg"
          },
        ],
    }, 
    {
        id: "6",
        imagem: "../imgs/module6.jpg",
        titulo: "Módulo 6",
        subtitulo: "Um novo Começo!",
        descricao: "Como funciona a ajuda profissional? Descobre os sinais que indicam que podes precisar de ajuda profissional, conhece o papel do psicólogo e explora os recursos disponíveis para dares o próximo passo.",
        introducao: "Todos nós sentimos ansiedade – e isso é perfeitamente normal! Aqui, vais compreender melhor as emoções, como elas influenciam o nosso dia a dia e aprender a distinguir entre uma ansiedade comum e uma ansiedade SOS que causa sofrimento.",
        atividades: [
          {
            url: "banda-desenhada",
            titulo: "Ansiedade: Aliada ou Empecilho?",
            tipo: "texto",
            descricao: "Banda desenhada que explica ansiedade comum vs. SOS.",
            imagem: "../imgs/module1.jpg"
          },
          {
            url: "linha-ansiedade",
            titulo: "Linha da Ansiedade",
            tipo: "popup",
            descricao: "Explora ansiedade normativa vs. patológica numa situação.",
            imagem: "../imgs/module1.jpg"
          },
          {
            url: "unindo-experiencias",
            titulo: "Unindo Experiências",
            tipo: "video",
            descricao: "Vídeo com relatos reais sobre ansiedade.",
            imagem: "../imgs/module1.jpg"
          },
          {
            url: "ansiedade-sem-filtros",
            titulo: "Ansiedade sem Filtros",
            tipo: "imagem",
            descricao: "Imagens estilo Instagram sobre ansiedade na adolescência.",
            imagem: "../imgs/module1.jpg"
          },
        ],
    },


  ];
  
  export default modulos;
  