import React, { Component } from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';

const StyledBreadcrumb = withStyles(theme => ({
    root: {
      backgroundColor: theme.palette.grey[100],
      height: theme.spacing(3),
      color: theme.palette.grey[800],
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: theme.palette.grey[300],
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(theme.palette.grey[300], 0.12),
      },
    },
  }))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

class MUIPic extends Component {
    
    render() { 
      return (
          <React.Fragment>       
          <Breadcrumbs aria-label="breadcrumb">
          <StyledBreadcrumb
            label="SignUp"
            icon={<EditAttributesIcon fontSize="small" />}
          />
        </Breadcrumbs>
      </React.Fragment>
      );
  }
}
export default MUIPic;