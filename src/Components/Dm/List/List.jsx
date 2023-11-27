import ListItems from "./ListItems";

export default function List() {

    return (
        <div className="list" >
            <ul className="slider">
                <ListItems />
                <ListItems />
                <ListItems />
                <ListItems />
                <ListItems />
                <ListItems />
            </ul>
        </div>
    );
}