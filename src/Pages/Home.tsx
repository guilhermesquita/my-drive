import { Card } from "../components"
import { Header } from "../components/header"

export const Home = () => {
    return(
        <main>
            <Header/>
            <h1>Titulo do site</h1>
            <div><Card name={'teste'}/></div>
        </main>
    )
}