import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11);

    const addEventHandler = () => {
        const newTeam = team + 1;
        setTeam(newTeam)
    }

    const removeEventHandler = () => {
        const removeTeam = team - 1;
        setTeam(removeTeam)
    }


    const teamStyle = {
        border: '2px solid orange',
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={addEventHandler}>Add</button>
            <button onClick={removeEventHandler}>Remove</button>
        </div>
    )
}