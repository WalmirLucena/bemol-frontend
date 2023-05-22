export type CreateUserParams = {
    email: string;
    password: string;
    name: string;
    birthdate: Date;
    phone_number: string;
    city: string;
    cpf: string;
    state: string;
    cep: string;
    address: string;
    address_number: string;
  };

 export interface CepResponse {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
  }