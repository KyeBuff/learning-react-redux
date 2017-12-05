import React, {Component} from "react";

import Input from "./Input";

// fields: an array of objects with name and field properties and outputs an Input for each
// className: so you can style it from its parent
// button: the text for the submit button
class Form extends Component {

	constructor(props) {
		super(props);

		this.state = {
			fields: this.props.fields.map(({ name, label }) => {
				return {
					name: name,
					label: label,
					value: "",
				}
			}),
		}

		this.submit = this.submit.bind(this);
	}

	change(e, i) {
		const fields = this.state.fields.slice();
		fields[i].value = e.target.value;
		this.setState({ fields });
	}

	submit(e) {
		e.preventDefault();
		this.props.onSubmit();
	}

  render() {

  	const { fields, className, button } = this.props;

  	return (
  		<form onSubmit={(e) => this.submit(e)} className={ "form" + (className ? " " + className : "") } >
	      { fields.map(({ name, label, value }, i) => (
	          <Input 
	          	onChange={(e) => this.onChange(e, i)}
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
