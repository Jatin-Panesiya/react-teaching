import Header from '../../components/header/Header'

const Home = () => {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
    ];

    function handleClick(value) {
        console.log(value);
    }

    return (
        <div>
            <Header />
            HOME
            {
                products.map((ele) => (
                    <div key={ele.id}>
                        <div>{ele.name}</div>
                    </div>
                ))
            }

            <button onClick={() => handleClick("hello")}>Console</button>
            <button onClick={handleClick}>Console</button>

            <input type="text" onChange={(e) => handleClick(e.target.value)} />
            <input type="text" onChange={handleClick} />
        </div>
    )
}

export default Home
