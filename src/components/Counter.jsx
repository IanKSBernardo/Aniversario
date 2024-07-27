import React, { useEffect, useState } from 'react';
import '../CSS/Counter.css';

const Counter = () => {
  const [timeTogether, setTimeTogether] = useState('');
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);

  useEffect(() => {
    const startDate = new Date('2022-08-10T00:00:00');
    
    const updateCounter = () => {
      const now = new Date();
      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      const yearDiff = now.getFullYear() - startDate.getFullYear();
      const monthDiff = now.getMonth() - startDate.getMonth();

      let totalYears = yearDiff;
      let totalMonths = monthDiff;

      if (monthDiff < 0) {
        totalYears--;
        totalMonths += 12;
      }

      setYears(totalYears);
      setMonths(totalMonths);

      setTimeTogether(`${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos (${totalYears} años, ${totalMonths} meses)`);
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="counter">
      <h2>Tiempo Juntos</h2>
      <p>{timeTogether}</p>
      <p>Este es el tiempo que llevamos juntos :3</p>
    </div>
  );
}

export default Counter;
