import styles from "./styles.module.css"

const Search = ({setSearch}) => {
  return (
    <input input 
        type="text"
        className={styles.serach}
        placeholder="Search"
        onChange={({currentTarget: input}) => setSearch(input.value)}
        />
  )
}

export default Search