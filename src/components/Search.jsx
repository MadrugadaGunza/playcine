import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
    const inputRef = React.useRef();

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className="search">
            <div>
                <img src="search.svg" alt="Pesquisar" />
                <input
                    type="text"
                    placeholder="Pesquise entre milhares de filmes..."
                    value={searchTerm}
                    onChange={({ target }) => setSearchTerm(target.value)}
                    ref={inputRef}
                />
            </div>
        </div>
    )
}

export default Search