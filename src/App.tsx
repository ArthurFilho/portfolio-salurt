import { GlobalStyle } from "./styles/global";
import { ContainerAboutMe, ContainerAboutUs, ContainerAllPage, ContainerBanner, ContainerHeader, ListLeft, ListRight } from "./styles/style";

import ArthurPicture from "./assets/arthur.png"
import ThiagoPicture from "./assets/thiago.png"

import { Globe, Pencil, FileText } from "@phosphor-icons/react";

export function App() {

  return (
    <>
      <ContainerAllPage>
        
        <ContainerHeader>
          <h2>Ola, Somos a <span>Salurt</span></h2>

          <h1>DESIGNERS E PROGRAMADORES</h1>

          <p>
            Fico feliz de vê-lo aqui, espero que aproveite o que temos a lhe oferecer <br /> 
            com nossos conteúdos da melhor forma
          </p>

          <button> Quero Conhecer </button>
        </ContainerHeader>

        <ContainerAboutMe Variant="secondary">

        <img src={ArthurPicture} alt="PhotoArthur" />

          <div>

            <p> <strong>XX</strong> PROGRAMADOR FRONTEND</p>
            
            <h4> 
              Programador javascript com experiência em typescript, <br /> 
              reactJS, nodeJS, react native, nextJS, HTML, CSS entre outros. 
            </h4>

            <span>
              Com minhas habilidades em desenvolvimento frontend, sou capaz de 
              criar soluções inovadoras e proporcionar uma experiência única aos
              usuários. Além disso, meu comprometimento e dedicação constante me  
              permitem aprimorar minhas habilidades e buscar sempre a excelência em 
              cada projeto desenvolvido. Com isso, eu sempre busco ter criatividade 
              e determinação em alcançar os objetivos propostos.
            </span>
          </div>

        </ContainerAboutMe>

        <ContainerAboutMe Variant="primary">

          <div>
            <p> <strong>XX</strong> DESIGNER GRAFICO E PROGRAMADOR</p>
            
            <h4>Designer gráfico e desenvolvedor em, javasscript, python, c+, c++</h4>

            <span>
              Formado como designer gráfico aperfeiçoando suas <br />
              partes de conhecimentos na aréa de programação. <br />
              visando sempre aprender, como ensinar e por em pratica <br />
              seus conhecimentos gerais da sua área fazendo o seu <br />
              melhor, para seu sucesso e o sucesso do resto da equipre.
            </span>
          </div>

          <img src={ThiagoPicture} alt="PhotoThiago" />

        </ContainerAboutMe>

        <ContainerBanner>

          <div> 

            <div>
              <h1><span>+</span> 01</h1>
              Programação de ponta
            </div>  
            
            <div>
              <h1><span>+</span> 05</h1>
              Designer Original
            </div>  
            
            <div>
              <h1><span>+</span> 10</h1>
              Sites Lançados
            </div>  
          
          </div>

        </ContainerBanner>

        <ContainerAboutUs>
            <ul>
              
              <ListLeft>

                <Globe size={64} color="cyan" />

                <p>
                  Melhores sites lançados na rede da internet  <br />
                  nos melhores servidores recomendado por nós, <br />
                  com sua segurança e conforto.
                </p>
              </ListLeft>

              <ListRight>

              <Pencil size={64} color="cyan" />

                <p>
                  Melhor designer de acordo com o seu gosto e <br />
                  de uma forma onde possa agradar você e o <br />
                  teu cliente onde todos ficam felizes... nos te <br />
                  damos qualidade de acesso e beleza de visual <br />

                  <br />

                  100% Original  <br />

                  <br />

                  Feito Originalmente por nos, somente por nós.
                </p>
              </ListRight>



              <ListLeft>

                <FileText size={64} color="cyan" />

                <p>
                  Nossa inovação "Nascer" sabendo é uma limitação <br />
                  porque obriga a apenas repetir e nunca a cria, <br />
                  inovar, refazer, modificar. Quanto mais se nasce <br />
                  pronto, mais refém do que já se sabe e, portanto <br />
                  do passado; aprender sempre é o que mais impede <br />
                  que nos tornaremos prisioneiros de situações que, <br />
                  por serem inéditas, não saberiamos enfrentar.
                </p>
              </ListLeft>

            </ul>
        </ContainerAboutUs>

      </ContainerAllPage>

    <GlobalStyle />
    </>
  )
}

