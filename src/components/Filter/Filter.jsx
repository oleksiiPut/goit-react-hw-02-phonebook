import React from 'react';
import { Label, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <Input type="text" value={value} onChange={onChange} />
  </Label>
);

// class Filter extends Component {
//   state = {
//     name: '',
//     filter: '',
//   };

//   onFilterChange = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   render() {
//     const { filter } = this.state;

//     return (
//       <label>
//         Find contacts by name
//         <input type="text" value={filter} onChange={this.onFilterChange} />
//       </label>
//     );
//   }
// }

export default Filter;
