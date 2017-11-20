import React from 'react';

import FormField from '../components/FormField/FormField';
import FormText from '../components/FormText/FormText';
import Form from '../components/Form/Form';
import Button from '../components/Button/Button';

export default class CreateAccount extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      currency: '',
      description: ''
    };
  }

  rules = {
    name: [
      val => val.length !== 0
    ],
    currency: [
      val => val.length !== 0,
      val =>  ['RUB', 'USD', 'GBP', 'EUR'].indexOf(val.toUpperCase()) >= 0
    ],
    description: [
      val => val.length !== 0
    ]
  };

  formClear() {
    this.setState({
      name: '',
      currency: '',
      description: ''
    });
  }

  validationsForm() {
    return Object.keys(this.rules).every(key => this.rules[key].every(rule => rule(this.state[key])));
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.validationsForm()) {
      return;
    }

    this.props.createAcoount(this.state);

    this.formClear();
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormField label="Имя" name="name">
            <FormText value={this.state.name} name="name" onChange={this.handleInputChange}/>
          </FormField>
          <FormField label="Валюта" name="currency">
            <FormText value={this.state.currency} name="currency" onChange={this.handleInputChange}/>
          </FormField>
          <FormField label="Описание" name="description">
            <FormText value={this.state.description} name="description" onChange={this.handleInputChange}/>
          </FormField>
          <Button type="submit">Отправить</Button>
        </Form>
      </div>
    );
  }
}

// export default () => (
//   <div>
//     <h2>Создание аккаунта</h2>
//     <p>Здесь мы будем создавать новые счета</p>
//   </div>
// );
