import { useState } from "react"

export const TestPage = () => {

    const [clicks, setClicks] = useState(0);

    return (
        <section>
            <p>
                <span>{clicks}</span> cicks!
            </p>
            <button onClick={() => setClicks(clicks + 1)}>
                Press me
            </button>
        </section>
    )

}