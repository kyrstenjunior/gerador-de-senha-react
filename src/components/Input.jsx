import { useState } from 'react';

import './styles.js';
import './style.css';

import * as C from './styles.js';

const Input = () => {

  const [number, setNumber] = useState(15);
  const [password, setPassword] = useState("");
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";

  const handleGenarate = () => {
    let pass = '';

    for(let i = 0; i < number; i++){
      pass += charset.charAt(Math.floor(Math.random() * charset.length))
    }

    setPassword(pass);
  }

  function copyPassword(){
    navigator.clipboard.writeText(password);
    alert("Senha copiada com sucesso!");
  }

  return (
    <>
    <C.Container>
        <h2 style={{fontSize: 22, fontWeight: 'lighter', textAlign: 'left'}}>Tamanho: {number} caracteres</h2>
        <C.StyledSlider 
          defaultValue={[number]}
          min={5} max={25} step={1}
          aria-label="Volume"
          onValueChange={(e) => setNumber(e)}
        >
            <C.StyledTrack>
                <C.StyledRange />
            </C.StyledTrack>
            <C.StyledThumb />
        </C.StyledSlider>
        <C.BtnPassword onClick={handleGenarate}>Gerar Senha</C.BtnPassword>
    </C.Container>
    {password.length !== 0 ? (
      <div className='box-genarate-pass'>
        <h2>A senha gerada foi:</h2>
        <C.BoxPassword onClick={copyPassword}>{password}</C.BoxPassword>
        <p className='tooltip'>Clique na senha para copiar. 👆🏽</p>
      </div>
    ) : (" ")}
    </>
  )
}

export default Input