/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { Box, Divider,  Grid } from '@mui/material';
import { Form, InputBase, MainContainer } from './SignIn.styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SubmitButton from '../../components/button/button';
import { consultaCep, post } from '../../../services/request';
import WarningModal from '../../components/warning-modal/warning-modal';
import schema from './schema';
import NeutralModal from '../../components/neutral-modal/neutral-modal';

function SignIn() {
    const [ modal, setModal] = useState(false)
    const [ successModal, setSucessModal] = useState(false)

    const [ errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate();

    const [state, setState] = useState({
        screeWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        cpf: '',
    })
    const mobileView = state.screeWidth <= 600;
    
  const { getValues, register, handleSubmit, formState: { errors },  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit =  async () => {
    const formValues = getValues();

    const checkAge = isAdult(formValues.birthdate);

    if(!checkAge){
        setModal(true);
        setErrorMessage('Você ainda não possui idade para se cadastrar!')
        return;
    }

    const result = await consultaCep(formValues.cep);

    if(result.uf !== "AM"){
        setModal(true);
        setErrorMessage('Ainda não estamos disponível no seu endereço!')
        return;
    }
    const formattedDate = formatDate(formValues.birthdate);

    try {
        const endpoint = '/user';
        const data = {email: formValues.email, 
        password: formValues.password, 
        name: formValues.name, 
        birthdate: new Date(formattedDate), 
        phone_number: formValues.phoneNumber, 
        city: formValues.city,
        cpf: formValues.cpf,
        state: formValues.state,
        cep: formValues.cep,
        address: formValues.address,
        address_number: formValues.numberAddress}

    await post(endpoint, data);
    
    setSucessModal(true);

        
    } catch (error) {
        setModal(true);
        setErrorMessage('Ocorreu um erro no seu cadastro. Por favor tente novamente!') 
    }
    
  };

  const formatCPF = (value) => {
    const cpf = value.replace(/\D/g, '');
    const cpfMask = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return cpfMask;
  };

  const formatPhone = (value) => {
    const phone = value.replace(/\D/g, '');
    const phoneMask = phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    return phoneMask;
  };

  const formatDate = (value) => {
    const parts = value.split('/');
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];

    return `${year}-${month}-${day}`;
  }

  const formatBirthdate = (value) => {
    const numbersOnly = value.replace(/\D/g, '');
    const dayMonthYear = numbersOnly.match(/(\d{1,2})(\d{1,2})(\d{1,4})/);
    let formattedValue = '';

    formattedValue = `${dayMonthYear[1]}/${dayMonthYear[2]}/${dayMonthYear[3]}`;

    return formattedValue;
  };

  const isAdult = (dateString: string) => {
    console.log(dateString, 'data');
    const today = new Date();
  
    const [day, month, year] = dateString.split('/');
    const birthDate = new Date(`${year}/${month}/${day}`);
  
    const timeDiff = today.getTime() - birthDate.getTime();
  
    const yearsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
  
    return yearsDiff >= 18;
  }

  const formatCEP = (cep) => {
    const numericCEP = cep.replace(/\D/g, '');
  
    const formattedCEP = `${numericCEP.substr(0, 5)}-${numericCEP.substr(5, 3)}`;
  
    return formattedCEP;
  }

  return (
    <>
      <Header/>
      <MainContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>

      <Box>
            <Box sx={{ marginTop: 3 }}>Dados Pessoais</Box>
            <Box>
              <Grid container spacing={3}>
              <Grid item xs={mobileView ? 11 : 5} marginTop={2}>
                    <InputBase
                        fullWidth
                        label="Nome"
                        type="text"
                        placeholder="Nome"
                        {...register('name')}
                        error={!!errors.name}
                        helperText={errors.name?.message as string ?? ''}
                    

                    />
                </Grid>
                <Grid item xs={mobileView ? 11 : 3} marginTop={2}>
                  <InputBase
                    fullWidth
                    label="CPF"
                    type="text"
                    placeholder="CPF"
                    error={!!errors.cpf}
                    helperText={errors.cpf?.message as string ?? ''}
                    {...register('cpf')}
                    onChange={(e) => {
                      e.target.value = formatCPF(e.target.value);
                    }}
                    

                  />
                </Grid>
                <Grid item xs={mobileView ? 9 : 4} marginTop={2}>
                  <InputBase
                    fullWidth
                    label="Celular"
                    type="text"
                    placeholder="Celular"
                    {...register('phoneNumber')}
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber?.message as string ?? ''}
                    onChange={(e) => {
                        e.target.value = formatPhone(e.target.value);
                      }}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ marginBottom: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={mobileView ? 11 : 5} marginTop={2}>
                  <InputBase
                    fullWidth
                    label="E-mail"
                    type="text"
                    placeholder="E-mail"
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email?.message as string ?? ''}
                  />
                </Grid>
                <Grid item xs={mobileView ? 9 : 3} marginTop={2}>
                  <InputBase
                    fullWidth
                    type="text"
                    label="Data de Nascimento"
                    placeholder="Data de Nascimento"
                    {...register('birthdate')}
                    error={!!errors.birthdate}
                    helperText={errors.birthdate?.message as string ?? ''}
                     onChange={(e) => {
                         e.target.value = formatBirthdate(e.target.value);
                       }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Divider />
          
          <Box sx={{ marginTop: 3 }}>Senha</Box>

            <Box sx={{ marginBottom: 4 }}>
              <Grid container spacing={2}>
                <Grid item xs={mobileView ? 11 : 6} marginTop={2}>
                  <InputBase
                    fullWidth
                    type="password"
                    placeholder="Senha"
                    label="Senha"
                    {...register('password')}
                    error={!!errors.password}
                    helperText={errors.password?.message as string ?? ''}
                  />
                </Grid>
                <Grid item xs={mobileView ? 11 : 6} marginTop={2}>
                  <InputBase
                    fullWidth
                    type="password"
                    placeholder="Confirmar Senha"
                    label="Confirmar Senha"
                    {...register('confirmPassword')}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message as string ?? ''}
                  />
                </Grid>
              </Grid>
            </Box>
          <Divider />
          <Box>
            <Box sx={{ marginTop: 3 }}>Endereço</Box>
            <Box>
              <Grid container spacing={3}>
                <Grid item xs={mobileView ? 10 : 4} marginTop={2}>
                  <InputBase
                    fullWidth
                    type="text"
                    placeholder="Endereço"
                    label="Endereço"
                    {...register('address')}
                    error={!!errors.address}
                    helperText={errors.address?.message as string ?? ''}
                    
                  />
                </Grid>
                <Grid item xs={mobileView ? 5 : 2} marginTop={2}>
                  <InputBase
                    fullWidth
                    type="text"
                    placeholder="Número"
                    label="Número"
                    {...register('numberAddress')}
                    error={!!errors.numberAddress}
                    helperText={errors.numberAddress?.message as string ?? ''}
                  />
                </Grid>
                <Grid item xs={mobileView ? 5 : 2} marginTop={2}>
                  <InputBase
                    fullWidth
                    type="text"
                    placeholder="CEP"
                    label="CEP"
                    {...register('cep')}
                    error={!!errors.cep}
                    helperText={errors.cep?.message as string ?? ''}
                    onChange={(e) => {
                        e.target.value = formatCEP(e.target.value);
                      }}
                  />
                </Grid>
                <Grid item xs={mobileView ? 5 : 2} marginTop={2}>
                  <InputBase
                    fullWidth
                    type="text"
                    placeholder="Cidade"
                    label="Cidade"
                    {...register('city')}
                    error={!!errors.city}
                    helperText={errors.city?.message as string ?? ''}
                  />
                </Grid>
                <Grid item xs={mobileView ? 5 : 2} marginTop={2}>
                  <InputBase
                    fullWidth
                    type="text"
                    placeholder="Estado"
                    label="Estado"
                    {...register('state')}
                    error={!!errors.state}
                    helperText={errors.state?.message as string ?? ''}
                  />
                </Grid>
              </Grid>
            </Box>
        </Box>
          <Divider />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop={4}
            marginBottom={5}
            >
            <Box width="400px">
                <SubmitButton text="Cadastrar"  />
            </Box>
        </Box>
          
        </Form>
        <WarningModal isOpen={modal} text={errorMessage} title='Erro no Cadastro' onClose={() => setModal(false)} />
        <NeutralModal isOpen={successModal} text="Você já pode fazer o login no nosso site!" title="Seu cadastro foi efetuado com sucesso!" onClose={() => setSucessModal(false)} />
      </MainContainer>
    </>
  );
}

export default SignIn;
