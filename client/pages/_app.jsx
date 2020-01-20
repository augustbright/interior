import React from "react";
import App from "next/app";
import Head from "next/head";
import Modal from "react-modal";
import agencyStyles from '../styles/agency.css?type=global';
import galleryStyles from 'react-image-gallery/styles/css/image-gallery.css?type=global';
import chatStyles from 'react-chat-widget/lib/styles.css?type=global';
import _JSXStyle from 'styled-jsx/style';
import dynamic from 'next/dynamic';

const ChatWidget = dynamic(() => import('react-chat-widget').then(mod => mod.Widget), {ssr: false});

Object.assign(Modal.defaultStyles.content, {
  top: "50%",
  left: "50%",
  right: "auto",
  bottom: "auto",
  marginRight: "-50%",
  transform: null,
  padding: '0',
  maxHeight: '100vh',
  overflowY: 'auto'
});

Object.assign(Modal.defaultStyles.overlay, {
  backgroundColor: "rgba(0, 0, 0, 0.75)"
});

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    if (typeof window === 'object') {
      console.log('this is client');
    } else {

    }
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="Дизайн и ремонт для вашего дома быстро и качественно"
          />
          <meta name="author" content="August Bright" />
          <link rel="icon" type="image/x-icon" href="./img/favicon.ico" />

          <title>
            Интериор - Дизайн и ремонт для вашего дома быстро и качественно
          </title>

          <link
            href="vendor/bootstrap/css/bootstrap.min.css"
            rel="stylesheet"
          />

          <link
            href="vendor/fontawesome-free/css/all.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Kaushan+Script"
            rel="stylesheet"
            type="text/css"
          />
          <link href="https://fonts.googleapis.com/css?family=Marck+Script&display=swap" 
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <Component {...pageProps} />
        <ChatWidget 
          title="Чат с консультантом" 
          subtitle="Мы всегда на связи"
          senderPlaceHolder="Напишите сообщение..." 
          titleAvatar="img/team/2.jpg"
        />
        <style jsx global>{agencyStyles}</style>
        <style jsx global>{galleryStyles}</style>
        <style jsx global>{chatStyles}</style>
      </>
    );
  }
}
