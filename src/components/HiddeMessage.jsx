import {useState} from 'react'

export function HiddeMessage(){
    const[visible,setVisible]=useState(false)


    const hiddeorShow=()=>{
        setVisible(!visible)
    }

    return (
        <div>
            <button onClick={hiddeorShow}>
                {visible ? 'Ocultar': 'Mostrar'}
            </button>

            {visible && <p> Hola soy un mensaje</p>}

        </div>

    )
}