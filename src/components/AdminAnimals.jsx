const AdminAnimals = () => {
    useEffect(() => {
        fetch("http://localhost:4000/api/v1/animals")
            .then((response) => console.log(response))
            .then((result) => console.log(result))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h1>Vælg et dyr at redigere</h1>
            <ul></ul>
        </div>
    );
};

export default AdminAnimals;
