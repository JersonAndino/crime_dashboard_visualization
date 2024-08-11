import { Header } from "./Header";
import { Map } from "./Map";
import {CrimeNumbers} from "./CrimeNumbers";
import { TopCrimeTime } from "./TopCrimeTime";
import { TopCrimes } from "./TopCrimes";
import { CrimeDistribution } from "./CrimeDistribution";
import { CrimePeak } from "./CrimePeak";

export function App(){
    return (
        <section>
            <Header />
            <section className="top">
                <div className="top-left top-element top-section">
                    <Map />
                </div>                
                <div className="top-right top-section">
                    <div className="top-element">
                    <CrimeNumbers />
                    </div>
                    <div className="top-element">
                    < TopCrimeTime/>
                    </div>
                    <div className="top-element">
                    <TopCrimes />
                    </div>
                </div>
            </section>
            <section className="bottom">
                <div className="bottom-element">
                    <CrimeDistribution />
                </div>
                <div className="bottom-element">
                    <CrimePeak/>
                </div>
            </section>
        </section>
    )
}