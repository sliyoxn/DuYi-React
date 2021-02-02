import React from 'react'
import useAllStudents from "./myHooks/useAllStudents"

import { useEffect, useState } from "react"
import { getAllStudents } from "../services/student"

/**
 * 当组件首次加载完成后，获取所有学生数据
 */
export default function useAllStudents() {
    const [students, setStudents] = useState([])
    useEffect(() => {
        (async ()=>{
            const stus = await getAllStudents();
            setStudents(stus);
        })();
    }, [])
    return students;
}

function Test() {
    const stus = useAllStudents();
    const list = stus.map(it => <li key={it.id}>{it.name}</li>)
    return <ul>
        {list}
    </ul>
}

export default function App() {
    return (
        <div>
            <Test />
        </div>
    )
}
