import React, { FormEventHandler, useState } from 'react';
import '../../styles/main.css';
import { useNavigate, } from "react-router-dom";
import Header from '../../components/header/header';
import { Box, Input, TextField } from '@mui/material';
import { Form, Label, SignInContainer, Title } from './Home.styles';
import SubmitButton from '../../components/button/button';
import ButtonText from '../../components/button-text/button-text';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

function Home() {
    const navigate = useNavigate()

    function onClick(): void{
      navigate("/sign-in")
    }

    const schema = yup.object().shape({
      email: yup.string().email('Digite um email válido').required('Email é obrigatório'),
      password: yup.string().min(6, "A senha deve ter pelo menos 6 dígitos").required('Senha é obrigatória'),
    });
      const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });
    
      const onSubmit = (data, event): void => {
        console.log(data);
        event.preventDefault();
      };


  return (
    <div className="App">
      <Header />
      <Box display="flex" width="100%">
      <Box width="50%">
        <SignInContainer>
          <Title fontSize={ 32 } >
              Ainda não tem conta?
          </Title>
          <ButtonText title='Criar Cadastro' onClick={onClick} style={{width: '400px', marginTop: '20px'}}/>
        </SignInContainer>
          
      </Box>
      <Box width="50%" display="flex" justifyContent="center" alignItems="center">
      <Form
          onSubmit={handleSubmit(onSubmit)}
        >
            <>
              <Title fontSize={ 32 }>
                Olá, seja bem-vindo(a)
                <br /> Faça seu login para continuar
              </Title>
              <Box width="400px" marginTop="20px">
                <TextField fullWidth id="email" label="Usuário" variant="outlined" {...register('email')}
        error={!!errors.email}  helperText={errors.email?.message as string ?? ''}
       />
                
                <Label>
                  Insira o email do seu usuário
                </Label>
                <TextField fullWidth type="password" id="username" label="Senha" variant="outlined" {...register('password')}
        error={!!errors.password}  helperText={errors.password?.message as string ?? ''} />
                <Label>
                  Insira sua senha
                </Label>
              <SubmitButton text="Entrar"  />
              </Box>
            </>
        </Form>
      </Box>
    </Box>
      <Box>
      

      </Box>
    </div>
  );
}


export default Home;