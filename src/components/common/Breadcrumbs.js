import React from 'react';
import Breadcrumbs from 'react-router-dynamic-breadcrumbs';

const routes = {
  '/': 'Home',
  '/about': 'About',
  '/servies': 'Services',
  '/contact': 'Contact',
  '/login': 'Login'
}

class Pagebreadcrumb extends React.Component {
  render() {
    return (
      <nav aria-label="breadcrumb">
        <Breadcrumbs
          WrapperComponent={(props) => <ol className="breadcrumb d-flex justify-content-center">{props.children}</ol>}
          ActiveLinkComponent={(props) => <li className="breadcrumb-item active font-weight-bold" aria-current="page">{props.children}</li>}
          LinkComponent={(props) => <li className="breadcrumb-item">{props.children}</li>} // Don't create link tag or <Link />. Component will wrapp props.children with <Link />
          mappedRoutes={routes}
          routeMatcherRegex="([\w-]+)" />
      </nav>
    )
  }
}

export default Pagebreadcrumb;

