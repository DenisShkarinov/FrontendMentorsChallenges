import FilterButton from "./FilterButton.jsx";

export default function Filters ({ setFilter }) {
    return (
        <div className="filters">
            <FilterButton setFilter={setFilter}>All</FilterButton>
            <FilterButton setFilter={setFilter}>Active</FilterButton>
            <FilterButton setFilter={setFilter}>Completed</FilterButton>
        </div>
    )
}