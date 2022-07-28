import logo from './logo.svg';
import styled, { createGlobalStyle } from 'styled-components';

const Container = styled.div`
  height: auto;
  width: auto;

  background-color: rgb(174, 227, 243);
  border-radius: 20px;

  display: flex;
  justify-content: space-between;
  padding: 30px;
  margin: 20px;
`
const GlobalStyle = createGlobalStyle `
  * {
    font-family: 'apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;

    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`
const DivTitle = styled.div `
  padding-top: 10px;
`
const Title = styled.h1 `
  font-size: 35px;
  color: rgb(87, 87, 87);
  padding-bottom: 10px;
`
const Description = styled.p `
  color: rgb(87, 87, 87);
`
const DivImg = styled.div `

`
const Image = styled.img `
  border-radius: 120px;
`

const ItemCard = ({title, descricao, imagem, alternativo}) => {
  return (
    <Container>
      <DivTitle>
        <Title>{title}</Title>
        <Description>{descricao}</Description>
      </DivTitle>
      <DivImg>
        <Image src={imagem} alt={alternativo} id="img"/>
      </DivImg>
    </Container>
  )
}

function App() {

  const listaTarefas = [
    {
      title:"Título da Tarefa",
      descricao:"descrição da sua tarefa!",
      imagem:"pica-pau.jpg",
      alternativo: "imagem do personagem pica-pau com um óculos escuros."
    },

    {
      title:"Tomar banho",
      descricao:"Sabonete",
      imagem:"pica-pau.jpg",
      alternativo: "imagem do personagem pica-pau com um óculos escuros."
    },

    {
      title:"Cachorro quente",
      descricao:"salsicha",
      imagem:"pica-pau.jpg",
      alternativo: "imagem do personagem pica-pau com um óculos escuros."
    }

  ]

  return (
    <>
      <GlobalStyle/>
      {
        listaTarefas.map((tarefa =>
          <ItemCard {...tarefa}/>
        ))
      }
    </>

  );
}

export default App;