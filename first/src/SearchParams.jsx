import { useState , useEffect} from "react";
import Pet from "./Pet";
const ANIMALS = ["bird","cat","dog","rabbit","reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] =useState("");
    const [breed, setBreed] = useState([]);
    const [pets , setPets] = useState([]);
    const breeds = [];

    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets() {
        const res = await fetch(
          `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
      
        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <form onSubmit={(e) => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    location
                    <input value={location} onChange={(e) => setLocation(e.target.value)} id="location" placeholder="Location"/>
                </label>
                <label htmlFor="animal">
                    Animal
                    <select 
                        name="" 
                        id="animal"
                        value={animal}
                        onChange={e => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                        >
                            <option />
                            {ANIMALS.map((animal) => (
                                <option key={animal}>{animal}</option>
                            ))}
                        </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select 
                        disabled={breeds.length === 0}
                        name="" 
                        id="breed"
                        value={breed}
                        onChange={e => {setBreed(e.target.value)}}
                        >
                            <option />
                            {breeds.map((animal) => (
                                <option key={breed}>{breed}</option>
                            ))}
                        </select>
                </label>
                <button>Submit</button>
            </form>
            {
                pets.map((pet) => (
                    <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
                ))
            }
        </div>
    )
}

export default SearchParams;