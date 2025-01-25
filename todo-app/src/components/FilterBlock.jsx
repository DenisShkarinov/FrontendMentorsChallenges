import TodosLeft from "./TodosLeft.jsx";
import Filters from "./Filters.jsx";
import ClearComponent from "./ClearComponent.jsx";
import "./filters.css";

export default function FilterBlock ({ clearCompletedTodos, setFilter, leftTodos }) {
    return (
        <div className="filters-block">
            <TodosLeft leftTodos={leftTodos} />
            <Filters
                setFilter={setFilter}
            />
            <ClearComponent clear={clearCompletedTodos} />
        </div>
    )
}