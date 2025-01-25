export default function FilterButton ({ children, setFilter }) {
    return (
        <button onClick={() => setFilter(children + '')}>{ children }</button>
    )
}