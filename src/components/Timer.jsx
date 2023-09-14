import React, { useState, useEffect } from 'react';
import './Timer.css'

function Timer() {
    const [tempo, setTempoRestante] = useState(null);

    useEffect(() => {
        const calculoDia = () => {
            const agora = new Date();
            const final_do_dia = new Date();
            final_do_dia.setHours(23, 59, 59, 999);

            const diferenca = final_do_dia - agora;

            if (diferenca <= 0) {
                setTempoRestante('O dia chegou ao fim.');
            } else {
                const horas = Math.floor(diferenca / (1000 * 60 * 60));
                const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
                const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
                setTempoRestante(`${horas}h ${minutos}m ${segundos}s`);
            }
        };

        calculoDia();

        const timer = setInterval(calculoDia, 1000);
    }, []);

    return (
        <div className="title">
            <h1>Tempo restante até o final do dia:</h1>
            <div className="contagem">{tempo}</div>
        </div>
    );
}

export default Timer;
