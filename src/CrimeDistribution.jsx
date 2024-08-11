import {CrimeDistributionElement} from "./CrimeDistributionElement";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./static/Data";

Chart.register(CategoryScale);

export function CrimeDistribution(){    
    return (
        <section className="CrimeDistribution">
            <h1>CRIME DISTRIBUTION</h1>
            <CrimeDistributionElement/>
        </section>
    )
}