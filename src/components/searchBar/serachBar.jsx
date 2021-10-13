import SearchBar from '@mui/icons-material'
import { useState } from 'react'

function Searchbar () {
    const [text,setText] = useState('');
    return (
        <SearchBar
          value={text}
          placeholder='Find items, users and activities'
          onChange={(newValue) => setText(newValue)}
          //onRequestSearch={() => doSomethingWith(this.state.value)}
        />
      );
}

export default Searchbar;