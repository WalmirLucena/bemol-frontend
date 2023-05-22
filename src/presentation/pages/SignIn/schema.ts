import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().nullable().required("Nome é obrigatório"),
    email: yup.string().email('Digite um email válido').required('Email é obrigatório'),
    cpf: yup.string().nullable().required('CPF é obrigatório').matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido'),
    phoneNumber: yup.string().required('Telefone é obrigatório')
    .matches(
    /^\(\d{2}\) \d{5}-\d{4}$/,
    'Telefone inválido. O formato deve ser (99) 99999-9999'
    ),
    birthdate: yup.string().matches(
        /^(0[1-9]|1[0-9]|2[0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
        'Data de nascimento inválida. O formato deve ser dd/mm/aaaa.'
    )
    .required('Data de nascimento é obrigatória.'),
        password: yup.string().min(8).required('Senha é obrigatória'),
    confirmPassword: yup.string().min(8).required('Confirmação de senha é obrigatória').test('passwords-match', 'As senhas não coincidem', function (value) {
        return value === this.parent.password;
    }),
    address: yup.string().nullable().required('Endereço é obrigatório'),
    numberAddress: yup.string().nullable().required('Número do endereço é obrigatório'),
    cep: yup.string().nullable().required('CEP é obrigatório').matches(/^\d{5}-\d{3}$/, 'CEP inválido'),
    city: yup.string().nullable().required('Cidade é obrigatória'),
    state: yup.string().nullable().required('Estado é obrigatório'),
    });

export default schema;