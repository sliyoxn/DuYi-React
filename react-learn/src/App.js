import React, { useState, useCallback } from 'react'

class Child extends React.PureComponent {
    render() {
        console.log("Child Render")
        return <div>
            <h1>{this.props.text}</h1>
            <button onClick={this.props.onClick}>改变文本</button>
        </div>
    }
}

function Parent() {
    console.log("Parent Render")
    const [txt, setTxt] = useState(1)
    const [n, setN] = useState(0)
    const handleClick = useCallback(() => {
        setTxt(txt + 1)
    }, [txt])

    return (
        <div>
            <Child text={txt} onClick={handleClick} />
            <input type="number"
                value={n}
                onChange={e => {
                    setN(parseInt(e.target.value))
                }}
            />
        </div>
    )
}

export default function App() {

    return (
        <div>
            <Parent />
        </div>
    )
}
