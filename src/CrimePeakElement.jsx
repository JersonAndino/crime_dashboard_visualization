import { Line } from "react-chartjs-2";
import './crimeElementPeak.css';

export function CrimePeakElement(){
    const data = {
    labels: [1,2,3,4,5,6,7],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
    };
    return (
        <section className="CrimePeakElement">
            <p>Using Chart.js in React</p>
            <div className='crimeDPeakElementLineChart'>
                <Line data={data}/>
            </div>            
        </section>
    )
}