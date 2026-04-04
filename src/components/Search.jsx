const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="search">
            <div>
                <img src="search.svg" alt="Pesquisar" />
                <input
                    type="text"
                    placeholder="Pesquise entre milhares de filmes..."
                    value={searchTerm}
                    onChange={({ target }) => setSearchTerm(target.value)}
                />
            </div>
        </div>
    )
}

export default Search