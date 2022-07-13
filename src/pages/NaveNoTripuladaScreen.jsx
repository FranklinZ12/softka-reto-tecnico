import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { useMemo } from 'react';

const NaveNoTripuladaScreen = () => {
  const { naveID } = useParams();
  const navigate = useNavigate();
  

  return (
    <div>naveNoTripuladaScreen</div>
  )
}

export default NaveNoTripuladaScreen