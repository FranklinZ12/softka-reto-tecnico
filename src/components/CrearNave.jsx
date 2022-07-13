import 'styles/modal.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { SignupSchema } from 'utils/validation';
import Select from './ui/Select';
import { useEffect, useState } from 'react';

const initialValues = {
    tipoNave: "",
    nombre: "",
    peso: "",
    pais: "",
    pesoCarga: "",
    altura: "",
    capacidadPersonas: "",
    estadoNave: "",
    empuje: "",
    objetivo: "",
}


const dropdownOptions = [
    { key: 'Tipos de naves', value: '' },
    { key: 'lanzadera', value: 'lanzadera' },
    { key: 'No tripulado', value: 'noTripulado' },
    { key: 'Tripulado', value: 'tripulado' },
];

const CrearNave = () => {
    const onSubmit = values => console.log('form data', values);
    const [dataForm, setDataForm] = useState('');

    return (
        <section>
            {/* <!-- The button to open modal --> */}
            <label htmlFor="my-modal-3" className="btn modal-button gradient-btn">Crear nave espacial</label>

            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <Formik
                        initialValues={initialValues}
                        // initialValuesTripulado={initialValuesTripulado}

                        onSubmit={onSubmit}
                    >
                        {/* {
                            ({ isSubmitting }) => ( */}
                        <Form className='flex flex-col justify-around gap-4'>
                            <div className='flex flex-col items-center gap-6'>
                                <Select name='tipoNave'
                                    options={dropdownOptions}
                                    className="select select-bordered w-full max-w-xs"
                                    required
                                    onClick={(e) => {
                                        setDataForm(e.target.value)
                                    }}
                                />
                                <Field
                                    type="text"
                                    name="nombre"
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder="Nombre de la nave"
                                    required
                                />
                                <ErrorMessage name="nombre" component="small" className="text-red-500" />
                                <Field
                                    type="text"
                                    name="peso"
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder="Peso de la nave"
                                    required
                                />
                                <ErrorMessage name="peso" component="small" className="text-red-500" />
                                <Field
                                    type="text"
                                    name="pais"
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder="Pais"
                                    required
                                />
                                <ErrorMessage name="peso" component="small" className="text-red-500" />
                                <Field
                                    type="text"
                                    name="altura"
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder="Altura"
                                    required
                                />
                                <ErrorMessage name="altura" component="small" className="text-red-500" />
                                {
                                    dataForm === 'lanzadera' &&
                                    <>
                                        <Field
                                            type="text"
                                            name="pesoCarga"
                                            className="input input-bordered w-full max-w-xs"
                                            placeholder="Peso de carga"
                                            required
                                        />
                                        <ErrorMessage name="pesoCarga" component="small" className="text-red-500" />
                                        <Field
                                            type="text"
                                            name="empuje"
                                            className="input input-bordered w-full max-w-xs"
                                            placeholder="empuje"
                                            required
                                        />
                                        <ErrorMessage name="empuje" component="small" className="text-red-500" />
                                    </>
                                }
                                {
                                    dataForm === 'noTripulado' &&
                                    <>
                                        <Field
                                            type="text"
                                            name="estadoNave"
                                            className="input input-bordered w-full max-w-xs"
                                            placeholder="Estado de la nave"
                                            required
                                        />
                                        <ErrorMessage name="estadoNave" component="small" className="text-red-500" />
                                        <Field
                                            type="text"
                                            name="empuje"
                                            className="input input-bordered w-full max-w-xs"
                                            placeholder="empuje"
                                            required
                                        />
                                        <ErrorMessage name="empuje" component="small" className="text-red-500" />
                                        <Field
                                            type="text"
                                            name="objetivo"
                                            className="input input-bordered w-full max-w-xs"
                                            placeholder="Objetivo a estudiar"
                                            required
                                        />
                                        <ErrorMessage name="objetivo" component="small" className="text-red-500" />
                                    </>
                                }
                                {
                                    dataForm === 'tripulado' &&
                                    <>
                                        <Field
                                            type="text"
                                            name="objetivo"
                                            className="input input-bordered w-full max-w-xs"
                                            placeholder="Objetivo a aterrizar"
                                            required
                                        />
                                        <ErrorMessage name="objetivo" component="small" className="text-red-500" />
                                        <Field
                                            type="text"
                                            name="capacidadPersonas"
                                            className="input input-bordered w-full max-w-xs"
                                            placeholder="Capacidad de personas"
                                            required
                                        />
                                        <ErrorMessage name="capacidadPersonas" component="small" className="text-red-500" />
                                    </>
                                }
                            </div>
                            <div>
                                <button type="submit"
                                    //   disabled={isSubmitting}
                                    className='btn btn-success btn-block'
                                >
                                    Crear
                                </button>
                            </div>
                        </Form>
                        {/* ) */}
                        {/* } */}
                    </Formik>
                </div>
            </div>
        </section>
    )
}

export default CrearNave