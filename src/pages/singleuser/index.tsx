import React, { useMemo, useEffect, useState } from 'react'

const index = () => {
    const [resData, setResData] = useState<any>()

    const fetchName = useMemo(async () => {
        if (global.window) {
            const response = await fetch("/api/randomuser")
            const data = await response.json()
            if (data.error) {
                setResData({ resData: "Please try again later" })
            }
            setResData(data)
        }
    }, [])

    useEffect(() => {
        fetchName
    }, [])
    
    return (
        <div>
            <p>

                hey there  {resData?.data.results[0].name.first}   {resData?.data.results[0].name.last}
            </p>
            <p>

                you are   {resData?.data.results[0].dob.age} years old
            </p>
        </div>
    )
}

export default index