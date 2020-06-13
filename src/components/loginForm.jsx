import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import Input from './common/input';

class LoginForm extends Form {
  state = {
    data: { username: '', password: '' },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  };

  doSubmit = () => {
    // Call the server
    console.log('Submitted');
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div>
        <hi>Login</hi>
        <form onSubmit={this.handleSubmit}>
          <Input
            name='username'
            value={data.username}
            label='Username'
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name='password'
            value={data.password}
            label='Password'
            onChange={this.handleChange}
            error={errors.password}
          />
          <button disabled={this.validate()} className='btn btn-primary'>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
