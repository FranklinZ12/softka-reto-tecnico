import { Formik, Field, Form, ErrorMessage } from 'formik';
import { fetchPost } from 'helpers/fetch';
import { SignupSchema } from 'utils/validation';

const initialValuesTripulada = {
    nombre: "",
    peso: "",
    pais: "",
    capacidadPersonas: "",
    altura: "",
    objetivo: "",
}

const FormTripuladas = () => {
  return (
      <Formik
          initialValues={initialValuesTripulada}
          onSubmit={async (values, { setSubmitting }) => {
              fetchPost('/naveTripulada', values)
                  .then(res => {
                      console.log(res)
                      setSubmitting(false)
                  })
                  .catch(err => {
                      console.log(err)
                      setSubmitting(false)
                  })
          }}
      >
          {
              ({ isSubmitting }) => (
                  <Form className='flex flex-col justify-around gap-4 '>
                      <h2 className='text-center text-lg font-semibold'>Vehiculo tripulado</h2>
                      <hr />
                      <div className='flex flex-col items-center gap-6'>
                          <Field
                              type="text"
                              name="nombre"
                              className="input input-bordered w-full max-w-xs z-[999]"
                              placeholder="Nombre de la nave"
                              required
                          />
                          <ErrorMessage name="nombre" component="small" className="text-red-500" />
                          <Field
                              type="text"
                              name="peso"
                              className="input input-bordered w-full max-w-xs"
                              placeholder="Peso de la nave (TON)"
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
                          <ErrorMessage name="pais" component="small" className="text-red-500" />
                          <Field
                              type="text"
                              name="altura"
                              className="input input-bordered w-full max-w-xs"
                              placeholder="Altura(m)"
                              required
                          />
                          <ErrorMessage name="altura" component="small" className="text-red-500" />
                          <Field
                              type="text"
                              name="capacidadPersonas"
                              className="input input-bordered w-full max-w-xs"
                              placeholder="Capacidad de personas"
                              required
                          />
                          <ErrorMessage name="capacidadPersonas" component="small" className="text-red-500" />
                          <Field
                              type="text"
                              name="objetivo"
                              className="input input-bordered w-full max-w-xs"
                              placeholder="Objetivo a aterrizar"
                              required
                          />
                          <ErrorMessage name="objetivo" component="small" className="text-red-500" />
                      </div>
                      <div>
                          <button type="submit"
                              disabled={isSubmitting}
                              className='btn btn-success btn-block'
                          >
                              Crear
                          </button>
                      </div>
                  </Form>
              )
          }
      </Formik>
  )
}

export default FormTripuladas