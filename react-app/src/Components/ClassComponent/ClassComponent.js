import React, {Component} from 'react';
import './ClassComponent.css';
export default class ClassComponent extends React.Component{
    render(){
        const greeting ="good morning"
      const name=['john', 'deepak', 'ram','deepak'];
      const nameage=[
{
    name:'deepak',
    age:24
},
{
    name:'ankit',
    age:27
},

      ];
        return( 
        <div className="container">
        <h1> Class Component</h1>
        <p>{greeting}</p>
        <div>
            {name.map(name=><p>{name}</p>)}
        </div>
        <ul>
{
    nameage.map(nameage=><li>{nameage.name}{nameage.age}</li>)
}

        </ul>
        </div>
        
    )}
}