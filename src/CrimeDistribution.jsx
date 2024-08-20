import {CrimeDistributionElement} from "./CrimeDistributionElement";
import { Chart } from "chart.js/auto";
import { CategoryScale, elements } from "chart.js";
import { useState } from "react";
import { Data } from "./static/Data";
import './crimeDistribution.css'

Chart.register(CategoryScale);

export const CrimeDistribution = () => {
    const data = [
        {topico: '1', numbers: [80,866]},
        {topico: '2', numbers: [89, 866]},
        {topico: '3', numbers: [116, 866]},
        {topico: '4', numbers: [83, 866]},
        {topico: '5', numbers: [113,866]},
        {topico: '6', numbers: [81, 866]},
        {topico: '7', numbers: [89, 866]},
        {topico: '8', numbers: [80, 866]},
        {topico: '9', numbers: [66,866]},
        {topico: '10', numbers: [69, 866]}
    ];
    return (
        <section className="CrimeDistribution">
            <div className="container">
                {
                    data.map((data, index) => {
                        return (
                            <CrimeDistributionElement data_numbers={data.numbers} topico={data.topico}/>
                        )
                    })
                }
            </div>
            
        </section>
    )
}