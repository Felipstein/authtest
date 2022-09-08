import React, { useMemo } from 'react';

import AsideButton from '../../../components/AsideButton';

import accountDataIcon from '../../../assets/images/icons/account_data.svg';
import perfilIcon from '../../../assets/images/icons/perfil.svg';
import configIcon from '../../../assets/images/icons/config.svg';
import adminConfigIcon from '../../../assets/images/icons/admin_config.svg';
import aboutIcon from '../../../assets/images/icons/about.svg';
import contactsIcon from '../../../assets/images/icons/contacts.svg';
import logoutIcon from '../../../assets/images/icons/logout.svg';

import { Separator } from '../styles';

export default function Menus() {
  const menus = useMemo(() => [
    {
      icon: [accountDataIcon, 'Account Data Icon'],
      text: 'Dados da conta',
    },
    {
      icon: [perfilIcon, 'Perfil Icon'],
      text: 'Meu Perfil',
    },
    {
      icon: [configIcon, 'Config Icon'],
      text: 'Configuração',
    },
    {
      icon: [adminConfigIcon, 'Admin Config Icon'],
      text: 'Config. admin.',
    },
    {
      isSeparator: true,
    },
    {
      icon: [aboutIcon, 'About Icon'],
      text: 'Sobre mim',
    },
    {
      icon: [contactsIcon, 'Contacts Icon'],
      text: 'Contatos',
    },
    {
      isSeparator: true,
    },
    {
      icon: [logoutIcon, 'Logout Icon'],
      text: 'Sair',
      danger: true,
    },
  ]);

  return (
    menus.map((menu) => (
      menu.isSeparator ? (
        <Separator key={Math.random()} width="184px" />
      ) : (
        <AsideButton key={Math.random()} danger={menu.danger}>
          <img src={menu.icon[0]} alt={menu.icon[1]} />
          <span>{menu.text}</span>
        </AsideButton>
      )
    ))
  );
}
