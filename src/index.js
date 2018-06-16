import styled from 'styled-components';

/**
 * Wrap the entire template string in `&& {}` to get
 * around MUI specificity issues, without any style injection hacks.
 *
 * @param {Array} templateString Template string from styled component.
 */
const bumpSpecificity = templateString => {
  const styles = [...templateString];
  styles[0] = `&&{${styles[0]}`;
  styles[styles.length - 1] = `${styles[styles.length - 1]}}`;
  return styles;
};

/**
 * Helper for using styled-components with material-ui. Injects a classname,
 * and bumps the specificity so your styles "Just Work™️"
 * @param {Component} component Component to wrap with styles.
 * @param {Object} classes Either a string for the root class, or an object of classes to apply.
 */
const muiStyled = (component, classes = {}) => (...args) => {
  const styledComponent = styled(component).attrs({ classes });
  const [styles, ...interpolations] = args;
  return styledComponent(bumpSpecificity(styles), ...interpolations);
};

export default muiStyled;
