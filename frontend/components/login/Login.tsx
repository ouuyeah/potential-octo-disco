import * as React from 'react';
import LoginStyles from './styles/LoginStyles';
import ButtonPrimary from '../styles/ButtonPrimary';
import InputLogin from './styles/InputLogin';

const LoginPage: React.FunctionComponent = () => {
  const handleSubmit = () => async e => {
    e.preventDefault();
    // Persist the event so we can clear the form later
    e.persist();
  };

  return (
    <LoginStyles>
      <img src="/static/logo-sapco.png" alt="Logo Sapco" />

      <h3>Salvando al mundo de accidentes de tránsito </h3>

      <form onSubmit={handleSubmit()}>
        <InputLogin
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
        />
        <InputLogin
          type="password"
          name="password"
          placeholder="Contraseña"
          required
        />
        <ButtonPrimary login> Entrar </ButtonPrimary>
      </form>
    </LoginStyles>
  );
};

export default LoginPage;
