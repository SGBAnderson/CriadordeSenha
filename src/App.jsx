import { useState } from 'react';
import Button from './componentes/Button';
import { Title } from './componentes/Title';
import "./modules.css"
import { Input } from './componentes/Input';

export default function App() {
  const [senha, setSenha] = useState("")
  const [copyText, setCopyText] = useState("Copiar")
  const [customSize, setCustomSize] = useState(0)
  const [showInput, setShowInput] = useState(false)

  const passwordSize = showInput ? customSize : 8
      
  function geral() {
    const caracteres = "123456789-=!@#$%¨&*()_qwertyuiopasdfghjklzxcvbnm,.;~ç´[]ASDERTGBNHYUJMKIOLPQAZXSW"
    //const length = 12
    let novaSenha =""
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * caracteres.length)
      novaSenha += caracteres[position]
    }
    setSenha(novaSenha)
    setCopyText("Copiar")
  }
  
  function copyToClipborad() {
      window.navigator.clipboard.writeText(senha)
      setCopyText("Copiado!")
    }  

  return (
      <div className="app">
        <Title>Gerar Senhas</Title>
     
        <div className='LabelB'>
          <label htmlFor="showInput">Customizar tamanho:</label>
          <input
            type="checkbox"
            id="showInput"
            value={showInput}
            onChange={() => setShowInput(show => !show)}
          />
        </div>
       
        {showInput ? (
          <div className='inputB'>
            <label htmlFor="customSize"></label>
            <Input passwordSize={customSize} setPasswordSize={setCustomSize} />
          </div>
        ): null}
       
        <div className='buttonA'>
          <Button onClick={geral}>Gerar Senha de {passwordSize}</Button>
          <Button onClick={copyToClipborad}>{copyText}</Button>  
        </div>
        <Title>Sua senha é: </Title>
        <Title>{senha}</Title>
      </div> 
  );
}