import { Formik, Field, Form, ErrorMessage } from 'formik';
import { fetchPost } from 'helpers/fetch';
import { SignupSchemaLanzadera } from 'utils/validation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValuesLanzadera = {
    nombre: "",
    peso: "",
    pais: "",
    pesoCarga: "",
    altura: "",
    empuje: "",
}

const notificacion = () => toast.success('🦄 Nave creada con exito.', {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});
const FormLanzadera = () => {
  return (
      <Formik
          initialValues={initialValuesLanzadera}
          validationSchema={SignupSchemaLanzadera}
          onSubmit={async (values, { setSubmitting }) => {
              fetchPost('/naveLanzadera', values)
                  .then(res => {
                    if(res.ok){
                        notificacion()
                        setSubmitting(false)
                    }
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
                      <h2 className='text-center text-lg font-semibold'>Vehiculo Lanzadera</h2>
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
                              name="pesoCarga"
                              className="input input-bordered w-full max-w-xs"
                              placeholder="Peso de la carga (TON)"
                              required
                          />
                          <ErrorMessage name="pesoCarga" component="small" className="text-red-500" />
                          <Field
                              type="text"
                              name="empuje"
                              className="input input-bordered w-full max-w-xs"
                              placeholder="Empuje (TON)"
                              required
                          />
                          <ErrorMessage name="empuje" component="small" className="text-red-500" />
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

export default FormLanzadera