import ReactLoading from "react-loading";

const Loading = ({type}) => {
    return (
        <div className="flex flex-wrap justify-center items-center h-screen">
            <ReactLoading type={type} color="#5a297e"/>
        </div>
    )
}

export default Loading