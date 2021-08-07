// import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './navigation.module.scss';
const Navigation = ({ fullName, isLoading }) => {
  // const [user, setUser] = useState({});
  let display;
  if (isLoading) {
    display = <span className={classes.display__loading}></span>;
  } else if (!isLoading && fullName) {
    display = fullName;
  } else {
    display = 'login';
  }
  return (
    <nav className={classes.nav_containter}>
      <ul className={classes.nav_brand}>
        <Link to="/">
          <li>Beer Brand</li>
        </Link>
      </ul>
      <ul className={classes.nav_menu}>
        <li>cart</li>
        <Link to="/login">
          <li>{display}</li>
        </Link>
      </ul>
    </nav>
  );
};
const mapStateToProps = (state) => {
  return {
    fullName: state.authReducer.fullName,
    isLoading: state.authReducer.isLoading,
  };
};
export default connect(mapStateToProps)(Navigation);
