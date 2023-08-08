import {peopleSlice} from "../../store/slices/people";
import {useEffect} from "react";
import {Card} from "../../components/ui/card";
function IndexPage() {
    const fetchPeople = peopleSlice((state) => state.fetchPeople)
    const people = peopleSlice((state) => state.data)
    useEffect(() => {
        fetchPeople()
    }, [])

    console.log(people)
    return (
        <>
            {people && people.results.map((person) => <Card name={person.name} url={person.url} />)}
        </>
    )
}

export default IndexPage
