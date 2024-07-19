import React, { useEffect } from 'react';
// import { Card } from 'primereact/card';
import { CardKPI } from '../../components/Card/CardKPI';
import { TablaSales } from '../../components/TablaKPI/TablaSales';
import { KPI } from '../../components/Graficos/KPI';
import { Tab, TabGroup, TabList } from '@tremor/react';
// import './Dashboard.css';

export default function Dashboard() {
    useEffect(() => { }, []);

    console.log('Rendering Dashboard');
    return (
        <div className='container'>
            <h2 className='mx-auto max-w-xs'>Ventas Mensuales</h2>
            <div className="mx-auto max-w-lg space-y-12">
                <TabGroup defaultIndex={1}>
                    <TabList variant="line">
                        <Tab value="1">tremor.so</Tab>
                        <Tab value="2">github.com</Tab>
                        <Tab value="3">strava.com</Tab>
                    </TabList>
                </TabGroup>
            </div>
            <hr className="mb-3 mx-3 border-top-2 border-bottom-1" />
            <div className='tarjetas'>
                <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 '>
                    <CardKPI />
                    <CardKPI />
                    <CardKPI />
                    <CardKPI />
                </div>
            </div>
            <div className='graficos'>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
                    <KPI />
                    
                </div>
                <div>
                    <TablaSales />
                </div>
            </div>
        </div>
    );
}
