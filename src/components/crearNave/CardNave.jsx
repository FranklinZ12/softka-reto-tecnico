import FormLanzadera from "./FormLanzadera";
import FormNoTripulada from "./FormNoTripulada";
import FormTripuladas from "./FormTripuladas";


const CardNave = ({ img, title, text, tamaño, htmlf }) => {
    return (
        <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full ">
            <figure className='h-96'>
                <img src={img} alt="nave" width={tamaño ? `700` : null} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{text}</p>
                <div className="card-actions justify-end z-20">
                    <label htmlFor={htmlf} className="btn modal-button glass">Crear nave</label>
                </div>
            </div>
            {/* Modal Lanzadera */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="my-modal" 
                    className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <FormLanzadera />
                </div>
            </div>
            {/* Modal naves no tripuladas */}
            <input type="checkbox" id="my-modal-1" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="my-modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <FormNoTripulada />
                </div>
            </div>
            {/* Modal naves tripuladas */}
            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <FormTripuladas />
                </div>
            </div>
        </div>
    )
}

export default CardNave