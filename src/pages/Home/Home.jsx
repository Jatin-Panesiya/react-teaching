import { useState } from "react";

const Home = () => {
    const [count, setCount] = useState(1);
    const [cars, setCars] = useState(["Mustang", "Alto"])
    const [profile, setProfile] = useState({ name: "viral" })

    function test() {
        setProfile({ ...profile, surname: "check" });

        setProfile(prev => {
            return { ...prev, age: 10 }
        })
    }

    console.log(profile, 'bare')
    return (
        <div>
            <button onClick={test}>Increase</button>
            <div>{count}</div>
            {
                cars.map((ele) => (
                    <div key={ele}>{ele}</div>
                ))
            }

            <button onClick={() => {
                setProfile((prevVal) => {
                    return { ...prevVal, surname: "" }
                })
            }}>add surname</button>
            <button onClick={() => { setCount(count - 1) }}>Decrease</button>
        </div >
    )
}

export default Home
