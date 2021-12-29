import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const NavItem = ({ text }) => {
    const linkText = text.toLowerCase().split(' ').join('-');
    return (
        <List>
            <Link to={`/admin/${linkText.toLowerCase()}`} component={RouterLink}>
                <ListItem button key={text}>
                    <ListItemText primary={text} />
                </ListItem>
            </Link>
        </List>
    )
}

export default NavItem
