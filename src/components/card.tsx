import { Thumbnail } from "."

export type props = {
    name: string
}

export const Card = (props: props) => {
    return (
        <main>
            <Thumbnail urlBackgroundImage="https://images.pexels.com/photos/18003718/pexels-photo-18003718/free-photo-of-bola-esfera-baile-preto-e-branco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <h3>{props.name}</h3>
        </main>
    )
}