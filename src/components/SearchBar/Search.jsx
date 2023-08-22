import React, { useRef, useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import {ReactComponent as SearchIcon} from "../../assets/search-icon.svg";
import { Autocomplete, TextField } from '@mui/material';
import styles from "./Search.module.css";

const Search = ({placeholder, albums, handleAutoComplete}) => {

	const [selectedOption, setSelectedOption] = useState(null);
	const autocompleteRef = useRef();

	const handleSubmit = (ev) => {
		ev.preventDefault();
		if(selectedOption)
			handleAutoComplete(selectedOption.slug)
	}

	const handleSelect = (option) => {
		setSelectedOption(option);

		if(autocompleteRef.current)
			autocompleteRef.current.blur();
	}

  return (
		<>
			<form className={styles.wrapper} onSubmit={handleSubmit}>
				{/* <input className={styles.search} placeholder={placeholder} required /> */}
				<Autocomplete
					freeSolo
					id="free-solo-2-demo"
					disableClearable
					options={albums}
					getOptionLabel={(option) => option.title}
					className={styles.search}
					value={selectedOption}
					renderOption={(props, option) => <MenuItem {...props} item={option} key={option.id} onSelect={handleSelect} />}
					renderInput={(params) => (
						<TextField
							{...params}
							inputRef={autocompleteRef}
							label={placeholder}
							InputProps={{
								...params.InputProps,
								type: 'search',
							}}
						/>
					)}
				/>
				<button className={styles.searchButton} type='submit'>
					<SearchIcon />
				</button>
			</form>
		</>
  )
}

export default Search