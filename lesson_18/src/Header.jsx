import React from 'react';
export class Header extends React.Component {
  render() {
    console.log(this.props.menuItems);
    const links = [];
    for (let item of this.props.menuItems) {
      const link = <a href={item.ref}>{item.title}</a>;
      links.push(link);
    }
    return (
      <header className='global-header'>
        <h2>LOGO</h2>
        <p>{this.props.greetMessage}</p>
        <nav>{links}</nav>
        <button
          onClick={() => this.props.clicMeCallback('!!!THNKS FOR CLICK!!!')}
        >
          CLICK ME
        </button>
      </header>
    );
  }
}
