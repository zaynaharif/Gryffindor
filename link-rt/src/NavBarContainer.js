// import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles ({
            '@root': {
                '& > *': {
                    margin: theme.spacing(1),
                    width: '25ch',
                },
            }
        }

));

const NavBarContainer = () => {
    useStyles();

    return null;
};
export default NavBarContainer;