import Card from "./Card";

function Search({ items, input, setInput }) {
    
    function handleOnChange(e) {
        setInput(e.target.value)
    };

    const displaySearch = items.filter((item)=> item.title.toLowerCase().includes(input.toLowerCase()));
    

    return (
        <div >
                <nav className="navbar bg-light">
                    <form className="container-fluid">
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">search</span>
                            <input onChange={handleOnChange} type="text" className="form-control" placeholder="search item" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </form>
                </nav>
                <div className="container">
                    <div className="row">
                        {input.length > 0? displaySearch.map(item => (
                                <Card item = {item} title = {item.title} price = {item.price} image = {item.image} key={item.id} id = {item.id}/>
                            )): null}
                    </div>
                </div>
            </div>
    )
};

export default Search;