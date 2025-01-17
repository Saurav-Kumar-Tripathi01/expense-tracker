import React from 'react';
import "./PieChart.css";
import { PieChart } from '@mui/x-charts/PieChart';

function PieChartComp({ data }) {

    React.useEffect(() => {
        console.log(data)
    }, [data]);
    return (
        <div className="pichart-container">
            <PieChart
                series={[{ data }]}
                width={400}
                height={200}
            />
        </div>
    )
}

export default PieChartComp;