<p align="center">
  <img src="https://raw.githubusercontent.com/Uwu-Kagami/Uwu-Kagami/refs/heads/main/gif/c88cc62241ed6cb2b0fb68a83e493cf9.gif" width="300"/>
</p>
<p align="center">
  <a href="https://raw.githubusercontent.com/Uwu-Kagmi/Anti-Debugger/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-red?style=flat-square">
  </a>
  <a href="https://github.com/Uwu-Kagami/Discord-Extension-Token-Grabber">
    <img src="https://img.shields.io/github/repo-size/Uwu-Kagami/Discord-Extension-Token-Grabber?style=flat-square">
  </a>
</p>


## 🤖 Discord AutoBumper (Node.js)

Un script Node.js pour bumper automatiquement un serveur Discord via des services comme **Disboard**.

## 🚀 Fonctionnalités

- Envoie automatiquement `!d bump` dans un salon spécifique
- Bump toutes les 2 heures (modifiable)
- Utilise un compte utilisateur *(selfbot)* ou bot selon l’implémentation
- Configuration simple via fichier `.env`
- Léger et facile à faire tourner en continu (VPS, terminal, etc.)

---

## ⚠️ Avertissement

> Ce script est à **but éducatif uniquement**.  
> L’usage de comptes utilisateurs avec des scripts automatisés est **strictement interdit** par Discord et peut entraîner un **bannissement permanent**.  
> Utilisez à vos risques et périls.

---

## 📦 Prérequis

- [Node.js](https://nodejs.org/) (v16 ou supérieur recommandé)
- Un token de bot ou de compte utilisateur *(⚠️ usage risqué pour les comptes utilisateurs)*

---

## 🔧 Installation

1. **Clone le dépôt :**
   ```bash
   git clone https://github.com/ton-pseudo/discord-autobumper.git
   cd discord-autobumper
   npm install
   Mettre le token et le channel id dans le config.env
   TOKEN=ton_token_ici
   CHANNEL_ID=123456789012345678
   node index.js

