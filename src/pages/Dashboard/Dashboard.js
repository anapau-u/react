
import React from 'react';
import { Card } from 'primereact/card';
import './Dashboard.css'

export default function Dashboard() {
    return (
        <div className="graficos">
            <div className="titulo">
                <div className="tarjetas">
                    <Card title="Clientes nuevos">
                        <p className="m-0">
                            1200
                        </p>
                    </Card>
                </div>
                <div className="tarjetas">
                    <Card title="Clientes actuales">
                        <p className="m-0">
                            500
                        </p>
                    </Card>
                </div>
                <div className="tarjetas">
                    <Card title="Clientes Totales">
                        <p className="m-0">
                            3900
                        </p>
                    </Card>
                </div>
                <div className="tarjetas">
                    <Card title="Tasa de Retención">
                        <p className="m-0">
                            100
                        </p>
                    </Card>
                </div>            
            </div>
        </div>
    )
}
