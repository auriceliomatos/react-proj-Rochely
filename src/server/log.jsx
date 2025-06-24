import { useState } from 'react';
import { LoginContainer, FormGroup, Input, Button } from './stylesLog';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Controle } from './controle';

export const Log = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleClickLogin = (values) => {
    axios.post('http://localhost:3001/login', 
      {
        nome: values.name,
        senha: values.senha
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        withCredentials: true
      }
    ).then(response => {
        if (response.data.message === 'Login realizado com sucesso') {
          setIsLoggedIn(true);
        }
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
        if (error.code === 'ERR_NETWORK') {
          alert('Não foi possível conectar ao servidor. Verifique se o servidor está rodando.');
        } else if (error.response?.status === 401) {
          alert('Usuário ou senha inválidos');
        } else {
          alert('Erro ao fazer login. Tente novamente.');
        }
      });
  };

  const validationLogin = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    senha: Yup.string().required('Senha é obrigatória')
  });

  if (isLoggedIn) {
    return <Controle/>;
  }
//---------- formulario  para login ------------
  return (
    <LoginContainer>
      <h2>Login</h2>

      <Formik 
        initialValues={{ name: '', senha: '' }} 
        onSubmit={handleClickLogin}
        validationSchema={validationLogin}
      >
        {() => (
          <Form>
            <FormGroup>
              <Field name="name" placeholder="Nome" />
              <ErrorMessage name="name" component="div" style={{ color: 'red', fontSize: '0.8rem' }} />
            </FormGroup>

            <FormGroup>
              <Field name="senha" type="password" placeholder="Senha" />
              <ErrorMessage name="senha" component="div" style={{ color: 'red', fontSize: '0.8rem' }} />
            </FormGroup>

            <Button type="submit">Entrar</Button>
          </Form>
          
        )}
      </Formik>
    </LoginContainer>
  );
};
