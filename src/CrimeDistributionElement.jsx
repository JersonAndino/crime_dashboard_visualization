import { Doughnut } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import './crimeDistributionElement.css'

export const CrimeDistributionElement = ({data_numbers, topico}) => {  
    const data = {
        labels: [
          topico,
          'Total'
        ],
        datasets: [{
          label: 'Distribucion',
          data: data_numbers,
          backgroundColor: [
            'rgb(0,119,182)',
            'rgb(72,202,228)'
          ],
          hoverOffset: 4
        }]
      };
    return (
        <section className="CrimeDistributionElement">
            <div className='crimeDistributionElementDoughnoutChart'>
                <Pie data={data}/>
            </div>            
        </section>
    )
  }