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

function App() {
  return (
    <>
      <GlobalStyle/>
      <Container>
          <DivTitle>
            <Title>Título da Tarefa</Title>
            <Description>descrição da minha tarefa.</Description>
          </DivTitle>
          <DivImg>
            <Image src="pica-pau.jpg" alt="" id="img"/>
          </DivImg>
      </Container>
    </>

  );
}

export default App;