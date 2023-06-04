import "./search-box.styles.css";

export default function SearchBox(props) {
    return (
        <input
            className={`search-box ${props.className}`}
            type="search"
            placeholder={props.placeholder}
            onChange={props.onChangeHandler}
            value={props.searchBoxValue}
        />
    );
}
