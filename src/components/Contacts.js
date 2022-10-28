import React, { PureComponent as Component} from 'react';
import List from './List';


class Contacts extends Component {
  constructor() {
    super();
    this.state = { contacts: [] };
    this.fetchContacts = this.fetchContacts.bind(this);
  }

  componentDidMount() {
    this.fetchContacts();
  }

  fetchContacts() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => this.setState({ contacts: json.sort((a, b) => {
        const nameA = a.username.toUpperCase();
        const nameB = b.username.toUpperCase();
          if (nameA < nameB) {
            return -1;
          } if (nameA > nameB) {
            return 1;
          }
          return 0;
      })
    }));
  }


  render(){
    return(
      <div>
        <List contacts={ this.state.contacts }/>
      </div>
    )
  }
}
export default Contacts
