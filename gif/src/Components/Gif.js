import React from 'react';

const Gif = props => (
  <li className="gif-wrap">
    <img alt= {props.title} src={props.url}/>
  </li>
);

export default Gif;