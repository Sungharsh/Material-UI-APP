import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import StickyHeadTable from './Pages/StickyHeadTable';

class ContactTable extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Container maxWidth="md">
            <StickyHeadTable />
            </Container>
          </div>
         );
    }
}
 
export default ContactTable;