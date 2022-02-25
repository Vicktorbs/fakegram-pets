import { useState } from "react"

export const userInputValue = initialValue => {
    const [value, setValue] = useState(initialValue)
    const onChange = e => setValue(e.target.value)

    return{ value, onChange }
}
