import React ,{ useState }  from 'react'
import AddItens from '../AddItens/AddItens'

function ListaCompras(itens, lista) {
  const [items, setItems]=useState([])
  const [inputValue, setInputValue]= useState('')


  const addItem=()=>{
    if(inputValue.trim()!== ''){
      setItems([...items, inputValue])
      setInputValue('');
    } 
  };
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h1>Lista de Compras</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Adicione um item"
      />
      <button onClick={addItem}>Adicionar</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaCompras