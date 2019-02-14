import React from 'react';
import ReactDOM from 'react-dom';
import './ProductHeader.scss';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/groww-logo.svg';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    width: 115,
    height: 41
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    backgroundColor: '#f5f5f5',
    height: '41px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 328,
      '&:focus': {
        width: 200,
      }
    }
  }
});


class ProductHeader extends React.Component{
  state = {
    explore: '',
    labelWidth: 0,
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
    render() {
      const { classes } = this.props;
      return (
        <div className="Product-head">
          <div className="Header">
              <Link to = "/" > 
                <img src={logo} alt="groww" className="header-logo" />
              </Link>
          </div>        
          <div className="search-explore">
              <form className={classes.root}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel
                    ref={ref => {
                      this.InputLabelRef = ref;
                    }}
                    htmlFor="outlined-explore-simple"
                    style={{marginTop: -7}}
                  >
                    Explore
                  </InputLabel>
                  <Select
                    value={this.state.explore}
                    onChange={this.handleChange}
                    input={
                      <OutlinedInput
                        labelWidth={this.state.labelWidth}
                        name="explore"
                        id="outlined-explore-simple"
                      />
                    }
                  >
                    <MenuItem value={'mutual-funds'}>Mutual Funds</MenuItem>
                    <MenuItem value={'save-tax'}>Save Tax</MenuItem>
                    <MenuItem value={'questions'}>Questions</MenuItem>
                    <MenuItem value={'groups'}>Groups</MenuItem>
                    <MenuItem value={'blogs'}>Questions</MenuItem>
                  </Select>
                </FormControl>
              </form>  
              <div className={classes.search} style={{width: 400, marginLeft: 40}}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search mutual funds, questions or articles"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    style={{width: 400}}
                  />
              </div>
            </div>
            <div className="login-register">
              <div className="login">
                  <Button variant="contained" style={{borderRadius:0,boxShadow: 'none', background: '#fff',color: 'rgb(0, 208, 156)', fontWeight: 500, textTransform: 'capitalize', fontSize: 16}} className="login-btn">
                      Login
                  </Button>
              </div>
              <div className="register">
                  <Button variant="contained" style={{background: 'rgb(0, 208, 156)', color: '#fff', fontWeight: 500, textTransform: 'capitalize', fontSize: 16}} className="register-btn">
                      Register
                  </Button>
              </div>
            </div>  
          </div>
      )
    }
  }
  
  export default withStyles(styles)(ProductHeader);