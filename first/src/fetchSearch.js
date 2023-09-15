async function fetchSearch (queryKey) {
    const {animal, location, breeds} = queryKey[1];

    const res = await fetch (
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${animal}&breeds=${breeds}`
    );

    if(!res.ok) {
        throw new Error(`pet is not okay ${animal}, ${location}, ${breeds}`)
    }

    return res.json();
}

export default fetchSearch;