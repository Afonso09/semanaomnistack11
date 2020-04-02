import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.svg';


export default function Register(){
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [whatsapp, setWhatsapp] = useState('');
   const [cidade, setCidade] = useState('');
   const [uf, setUF] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            cidade,
            uf,
        };
        try{
        const response = await api.post('ongs', data);

        alert(`Seu ID de acesso: ${response.data.id}`);
        history.pushState('/');
        
        } catch (err){
        alert('Erro no cadastro, tente novamente');
    }
    }
    return (
        <div className="register-container">
            <div className="content">
                 <section>
                 <img src={logo} alt="Be The Hero"/>
                 <h1>Cadastro</h1>
                 <p>Faça seu cadastro, entre na plataaforma e ajuda pessoas a encontrar os casos da sua ONG.</p>

                 <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Não tenho Login
                    </Link>
                 </section>
                 <form onSubmit={handleRegister}>
                     <input 
                     placeholder="Nome da ONG"
                     value={name}
                     onChange={e => setName(e.target.value)}
                     />
                     <input 
                     type="email" placeholder="Email"
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                     />
                     <input 
                     placeholder="Whatsapp"
                     value={whatsapp}
                     onChange={e => setWhatsapp(e.target.value)}
                     />

                     <div className="input-group">
                         <input 
                         placeholder="Cidade"
                         value={cidade}
                         onChange={e => setCidade(e.target.value)}
                         />
                         <input 
                         placeholder="UF" style={{ width: 80 }}
                         value={uf}
                         onChange={e => setUF(e.target.value)}
                         />
                     </div>
                     <button className="button" type="submit">Cadastar</button>
                 </form>
            </div>
        </div>  
    );

}