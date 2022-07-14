import * as Yup from 'yup';

export const SignupSchemaLanzadera = Yup.object().shape({
    nombre: Yup.string()
        .min(3, '¡Nombre muy corto!')
        .max(20, '¡Nombre muy largo!')
        .required('Requerido'),
    peso: Yup.string()
        .min(1, '¡Peso muy corto!')
        .max(4, '¡Peso muy largo!')
        .required('Requerido'),
    pais: Yup.string()
        .required('Requerido'),
    altura: Yup.string()
        .min(1, '¡Altura muy corta!')
        .max(3, '¡Altura muy larga!')
        .required('Requerido'),
    pesoCarga: Yup.string()
        .min(1, '¡Peso de carga muy corto!')
        .max(3, '¡Peso de carga muy largo!')
        .required('Requerido'),
    empuje: Yup.string()
        .min(1, '¡Empuje muy corto!')
        .max(3, '¡Empuje muy largo!')
        .required('Requerido'),
});

export const SignupSchemaNoTripulado = Yup.object().shape({
    nombre: Yup.string()
        .min(3, '¡Nombre muy corto!')
        .max(20, '¡Nombre muy largo!')
        .required('Requerido'),
    peso: Yup.string()
        .min(1, '¡Peso muy corto!')
        .max(4, '¡Peso muy largo!')
        .required('Requerido'),
    pais: Yup.string()
        .required('Requerido'),
    altura: Yup.string()
        .min(1, '¡Altura muy corta!')
        .max(3, '¡Altura muy larga!')
        .required('Requerido'),
    empuje: Yup.string()
        .min(1, '¡Empuje muy corto!')
        .max(3, '¡Empuje muy largo!')
        .required('Requerido'),
    objetivo: Yup.string()
        .min(1, '¡Objetivo muy corto!')
        .max(41, '¡Objetivo muy largo!')
});

export const SignupSchemaTripulado = Yup.object().shape({
    nombre: Yup.string()
        .min(3, '¡Nombre muy corto!')
        .max(20, '¡Nombre muy largo!')
        .required('Requerido'),
    peso: Yup.string()
        .min(1, '¡Peso muy corto!')
        .max(4, '¡Peso muy largo!')
        .required('Requerido'),
    pais: Yup.string()
        .required('Requerido'),
    altura: Yup.string()
        .min(1, '¡Altura muy corta!')
        .max(3, '¡Altura muy larga!')
        .required('Requerido'),
    capacidadPersona: Yup.string()
        .min(1, '¡Capacidad de persona muy corta!')
        .max(3, '¡Capacidad de persona muy larga!')
        .required('Requerido'),
    objetivo: Yup.string()
        .min(1, '¡Objetivo muy corto!')
        .max(41, '¡Objetivo muy largo!')
});