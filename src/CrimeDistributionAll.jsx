import { Pie } from "react-chartjs-2"
export const CrimeDistributionAll = () => {
    const data = {
        labels: [
            '1. Procesos judiciales crimenes graves',
            '2. Crimenes civiles', 
            '3. Fraude', 
            '4. Violencia institucional y derecho de la mujer',
            '5. Crimenes violentos',
            '6. Seguridad en areas rurales', 
            '7. Violaciones de derechos humanos',
            '8. Modalidades de secuestro',
            '9. Participacion politica',
            '10. Violencia de genero'
        ],
        datasets: [{
          label: 'Distribucion',
          data: [80,89,116,83,113,81,89,80,66,69],
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(3,4,94)',
            'rgb(2,62,138)',
            'rgb(0,119,182)',
            'rgb(0,150,199)',
            'rgb(0,180,216)',
            'rgb(72,202,228)',
            'rgb(144,224,239)',
            'rgb(173,232,244)',
            'rgb(202,240,248)'
,
          ],
          hoverOffset: 4
        }]
      };
    return (
        <section className="CrimeDistributionAll">
            <div className='crimeDistributionElementPieChartAll'>
                <Pie data={data}/>
            </div>            
        </section>
    )
}