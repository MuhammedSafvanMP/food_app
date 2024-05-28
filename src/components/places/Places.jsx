import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Places() {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");

  return (
    <div className='flex justify-center items-center pt-10 gap-5 flex-col'>
      <div className='flex gap-36 font-bold'>
        <button onClick={() => navigate(`/places/Canadian`)}>Canadian</button>
        <button onClick={() => navigate(`/places/French`)}>French</button>
        <button onClick={() => navigate(`/places/Indian`)}>Indian</button>
        <button onClick={() => navigate(`/places/American`)}>American</button>
        <button onClick={() => navigate(`/places/Irish`)}>Irish</button>
        <button onClick={() => navigate(`/places/Italian`)}>Italian</button>
      </div>

      <div className='flex gap-36 font-bold'>
        <button onClick={() => navigate(`/places/British`)}>British</button>
        <button onClick={() => navigate(`/places/Chinese`)}>Chinese</button>
        <button onClick={() => navigate(`/places/Dutch`)}>Dutch</button>
        <button onClick={() => navigate(`/places/Egyptian`)}>Egyptian</button>
        <button onClick={() => navigate(`/places/French`)}>French</button>
        <button onClick={() => navigate(`/places/Greek`)}>Greek</button>
      </div>

      <div className='flex gap-36 font-bold'>
        <button onClick={() => navigate(`/places/Jamaican`)}>Jamaican</button>
        <button onClick={() => navigate(`/places/Japanese`)}>Japanese</button>
        <button onClick={() => navigate(`/places/Kenyan`)}>Kenyan</button>
        <button onClick={() => navigate(`/places/Malaysian`)}>Malaysian</button>
        <button onClick={() => navigate(`/places/Mexican`)}>Mexican</button>
        <button onClick={() => navigate(`/places/Moroccan`)}>Moroccan</button>
      </div>

      <div className='flex gap-36 font-bold'>
        <button onClick={() => navigate(`/places/Polish`)}>Polish</button>
        <button onClick={() => navigate(`/places/Portuguese`)}>Portuguese</button>
        <button onClick={() => navigate(`/places/Russian`)}>Russian</button>
        <button onClick={() => navigate(`/places/Spanish`)}>Spanish</button>
        <button onClick={() => navigate(`/places/Thai`)}>Thai</button>
        <button onClick={() => navigate(`/places/Tunisian`)}>Tunisian</button>
      </div>

      <div className='flex gap-36 font-bold'>
        <button onClick={() => navigate(`/places/Turkish`)}>Turkish</button>
        <button onClick={() => navigate(`/places/Ukrainian`)}>Ukrainian</button>
        <button onClick={() => navigate(`/places/Unknown`)}>Unknown</button>
        <button onClick={() => navigate(`/places/Vietnamese`)}>Vietnamese</button>
      </div>
    </div>
  );
}
