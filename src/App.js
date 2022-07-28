import { useState } from 'react';
import * as S from './style';
import {ItemCard} from './components/itemcard'

function App() {
  const [inputValue, setInputValue] = useState("")
  const [listaTarefas, setListaTarefa] = useState([
    {
      title:"Título da Tarefa",
      descricao:"descrição da sua tarefa!",
      imagem:"pica-pau.jpg",
      alternativo: "imagem do personagem pica-pau com um óculos escuros."
    }
  ])
  function handleChange (value) {
    setInputValue(value)
    console.log('inputValue', inputValue)
  }
  function handleClick () {

    if (inputValue === "") {
      return 
    }
    
    const novaTarefa = {
      title: inputValue,
      descricao:"descrição da sua tarefa!",
      imagem:"pica-pau.jpg",
      alternativo: "imagem do personagem pica-pau com um óculos escuros."
    }

    setListaTarefa(prevState => [...prevState, novaTarefa])
    setInputValue("")
  }
  return (
    <>
      <S.GlobalStyle/>
      {
        listaTarefas.map((tarefa =>
          <ItemCard {...tarefa}/>
        ))
      }
      <input type="text" onChange={(e) =>handleChange(e.target.value) } value={inputValue}/>
      <button onClick={() => handleClick()}>Adicione Tarefa</button>
    </>

  );
}
export default App;