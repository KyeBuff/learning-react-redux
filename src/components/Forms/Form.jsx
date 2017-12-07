import React, {Component} from "react";

import Input from "./Input";

// fields: an array of objects with name and field properties and outputs an Input for each
// className: so you can style it from its parent
// button: the text for the submit button
class Form extends Component {

	constructor(props) {
		super(props);

		this.state = {
			fields: this.props.fields.slice(),
		}

		this.submit = this.submit.bind(this);
		this.change = this.change.bind(this);
	}

	change(e, i) {
		const fields = this.state.fields.slice();
		fields[i].value = e.target.value;
		this.setState({ fields });
	}

	submit(e) {
		e.preventDefault();

		let data = this.state.fields.reduce((data, field) => {
			data[field.name] = field.value;
			return data;
		}, {});

		let validFields = this.state.fields.every(field => {
			return field.value;
		});

		if(validFields) {
			this.props.onSubmit(data);
		}
	}

  render() {

  	const { className, button } = this.props;

  	return (
  		<form onSubmit={(e) => this.submit(e)} className={ "form" + (className ? " " + className : "") } >
	      { this.state.fields.map(({ name, label, value }, i) => (
	          <Input 
	          	onChange={(e) => this.change(e, i)}
	          	key={ i } 
	          	name={ name } 
	          	label={ label }
	          	value={ value }
	          />
	      ))}
	      <button className="btn btn-success">{ button }</button>
    	</form>
    )
  }
}

export default Form;
