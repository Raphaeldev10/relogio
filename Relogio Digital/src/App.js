import React, { useState, useEffect } from 'react';

function RelogioDigital() {
  const [hora, setHora] = useState('');

  useEffect(() => {
    const intervalo = setInterval(() => {
      const data = new Date();
      const horas = data.getHours().toString().padStart(2, '0');
      const minutos = data.getMinutes().toString().padStart(2, '0');
      const segundos = data.getSeconds().toString().padStart(2, '0');
      setHora(`${horas}:${minutos}:${segundos}`);
    }, 1000);

    return () => clearInterval(intervalo); 
  }, []);

  return (
    <div style={{ fontSize: '48px', fontWeight: 'bold' }}>
      <h2>Relógio Digital</h2>
      <p>{hora}</p>
    </div>
  );
}

export default RelogioDigital;
