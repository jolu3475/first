const SearchParams = () => {
    const location = "Seattle, WA";
    return (
        <div>
            <form>
                <label htmlFor="location">
                    location
                    <input value={location} id="location" placeholder="Location"/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;