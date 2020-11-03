import "./Grid.css"
import React, {Component} from 'react'
//TODO

// Useful hints:
// for React Component:
class A extends Component{
	
	constructor(props) {
        super(props);
    }
	
	render(){
		
     let gridStyle = {
     color: (this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index) || this.props.conflicted ? "#FFF" : this.props.fixed ? "#666" : "#6CC",
     backgroundColor: this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index ? "#333" : this.props.conflicted ? "#E77" : "#FFF",
	 borderLeft: this.props.col_index % 3 === 0 ? "1.5px solid transparent" : "1.5px solid #666",
     borderRight: this.props.col_index % 3 === 2 ? "1.5px solid transparent" : "1.5px solid #666",
     borderTop: this.props.row_index % 3 === 0 ? "1.5px solid transparent" : "1.5px solid #666",
     borderBottom: this.props.row_index % 3 === 2 ? "1.5px solid transparent" : "1.5px solid #666",
 };
 return (
     <div className="grid_1x1" id={`grid-${this.props.row_index}*${this.props.col_index}`} tabIndex="1" style={gridStyle} onClick={() => this.props.handle_grid_1x1_click(this.props.row_index, this.props.col_index)}>
         { this.props.value === "0" ? "" : this.props.value}
     </div>
 );
}
}

export default A