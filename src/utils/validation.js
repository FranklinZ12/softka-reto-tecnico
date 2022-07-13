import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(3, '¡Nombre muy corto!')
        .max(20, '¡Nombre muy largo!')
        .required('Required'),
    tipo_nave: Yup.string()
        .required('Required'),
    peso: Yup.string()
        .required('Required'),
});