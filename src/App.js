import { useState } from 'react';
import * as S from './style';
import {ItemCard} from './components/itemcard'

function App() {
  const [inputValue, setInputValue] = useState("")
  const [inputValueDescription, setInputValueDescription] = useState("")
  const [listaTarefas, setListaTarefa] = useState([
    {
      title:"Título da Tarefa",
      descricao:"descrição da sua tarefa!",
      imagem:"pica-pau.jpg",
      alternativo: "imagem do personagem pica-pau com um óculos escuros."
    }
  ])

  function handleChangeTitulo (value) {
    setInputValue(value)
    console.log('inputValue', inputValue)
  }

  function handleChangeDescription (value) {
    setInputValueDescription(value)
    console.log('inputValueDescription', inputValueDescription)
  }

  function handleClick () {

    if (inputValue === "") {
      return 
    }

    if (inputValueDescription === "") {
      return 
    }

    const novaTarefa = {
      title: inputValue,
      descricao: inputValueDescription,
      imagem:"pica-pau.jpg",
      alternativo: "imagem do personagem pica-pau com um óculos escuros."
    }

    setListaTarefa(prevState => [...prevState, novaTarefa])
    setInputValue("")
    setInputValueDescription("")
  }

  return (
    <>
      <S.GlobalStyle/>
      {
        listaTarefas.map((tarefa =>
          <ItemCard {...tarefa}/>
        ))
      }
      <S.input type="text" onChange={(e) =>handleChangeTitulo(e.target.value) } value={inputValue} placeholder="título"/>
      <input type="text" onChange={(e) =>handleChangeDescription(e.target.value) } value={inputValueDescription} placeholder="descrição"/>
      <button onClick={() => handleClick()}>Adicione Tarefa</button>
    </>
  );
}
export default App;