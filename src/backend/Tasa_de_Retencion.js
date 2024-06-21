import React, { useState } from 'react';

function CalcularTasaRetencion() {
    const [clientesInicio, setClientesInicio] = useState(5000);
    const [nuevosClientes, setNuevosClientes] = useState(1200);
    const [clientesFinal, setClientesFinal] = useState(4200);
    const [tasaRetencion, setTasaRetencion] = useState(0);

    const Tasa_de_Retencion = () => {
        if (clientesInicio === 0) {
            setTasaRetencion(0); // Evita división por cero
        } else {
            const tasaRetencionCalc = ((clientesFinal - nuevosClientes) / clientesInicio) * 100;
            setTasaRetencion(tasaRetencionCalc.toFixed(2));
        }
    };

    return (
        <div>
            <h2>Calculadora de Tasa de Retención de Clientes</h2>
            <form>
                <label>
                    Clientes al inicio del período:
                    <input
                        type="number"
                        value={clientesInicio}
                        onChange={(e) => setClientesInicio(parseInt(e.target.value, 10))}
                    />
                </label>
                <br />
                <label>
                    Nuevos clientes durante el período:
                    <input
                        type="number"
                        value={nuevosClientes}
                        onChange={(e) => setNuevosClientes(parseInt(e.target.value, 10))}
                    />
                </label>
                <br />
                <label>
                    Clientes al final del período:
                    <input
                        type="number"
                        value={clientesFinal}
                        onChange={(e) => setClientesFinal(parseInt(e.target.value, 10))}
                    />
                </label>
                <br />
                <button onClick={handleCalculate}>Calcular Tasa de Retención</button>
            </form>
            <p>
                La tasa de retención de clientes es: {tasaRetencion}%
            </p>
        </div>
    );
}

export default CalcularTasaRetencion;