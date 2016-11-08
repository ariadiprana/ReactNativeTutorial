import React, { Component } from 'react';



export class Todo extends Component {
  constructor(){
    super()
    this.state = {
      notes : [
        {
          title:'title1',
          content:'content1'
        },
        {
          title:'title2',
          content:'content2'
        }
      ]
    }
  }

  handleChange(e){


  }

  handleClick(e){

  }


  render() {
    console.log(this.state.notes.length);
    const notes = this.state.notes
    for(var i in notes){

    }
    return (
      <div>
        <form>
            <input type="text" placeholder="title"/>
            <input type="text" placeholder="content"/>
            <button>Add</button>
            <ul>
              {this.state.notes[1].title}
            </ul>
        </form>
      </div>
    );
  }
}
