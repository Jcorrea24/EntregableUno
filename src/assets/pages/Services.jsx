import ComponenteUno from "../../components/ComponenteUno"
import ComponenteDos from "../../components/ComponenteDos"
import ComponenteTres from "../../components/ComponenteTres"

function App() {


    return (
        <main>
            <ComponenteDos />
            <section>
                <div className="cards-grid">
                    <ComponenteTres />
                    <ComponenteTres />
                    <ComponenteTres />
                </div>
                <ComponenteUno/>
            </section>
        </main>

            )
}

export default App