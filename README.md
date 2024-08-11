# Mon Projet Next.js

## Introduction

Ce projet est construit avec **Next.js**, un framework JavaScript basé sur React, qui permet de développer des applications web performantes avec des fonctionnalités comme le rendu côté serveur (SSR), le rendu statique (SSG) et une prise en charge complète du routage.

### Qu'est-ce que Next.js ?

Next.js est un framework minimaliste pour les applications React qui permet de :

- Rendre des pages côté serveur (Server-Side Rendering).
- Générer des pages statiques (Static Site Generation).
- Gérer le routage des pages de manière automatique.
- Optimiser les performances avec une gestion intelligente des ressources.

Next.js est souvent utilisé pour des applications web qui nécessitent de la rapidité, du SEO, ou des fonctionnalités avancées comme l'authentification et les API intégrées.

## Structure du Projet

### Dossiers Importants

1. **app/** :
   - **api/** : Ce dossier contient les fonctions API de votre projet. Next.js permet de créer facilement des API directement dans l'application sans nécessiter un serveur séparé.
   - **component/** : Ce dossier contient tous les composants React utilisés dans l'application. Un composant est une partie réutilisable de l'interface utilisateur.

2. **public/** :
   - Ce dossier contient des ressources statiques telles que des images, des fichiers CSS, et d'autres fichiers accessibles publiquement.

### Fichiers Importants

- **global.css** : Ce fichier contient les styles globaux de votre projet, appliqués à l'ensemble de l'application.
- **layout.tsx** : Ce fichier définit le layout général de votre application, c'est-à-dire la structure commune à toutes les pages.
- **page.tsx** : Ce fichier est la page principale ou la page d'accueil de votre application.
- **providers.tsx** : Ce fichier contient les composants ou contextes globaux qui doivent être disponibles dans toute l'application.

## Lancer le Projet

Pour lancer le projet en mode développement, utilisez l'une des commandes suivantes selon le gestionnaire de packages que vous utilisez :

- Avec **Yarn** :
  ```bash
  yarn dev
  ```

- Avec **npm** :
  ```bash
  npm run dev
  ```

Ces commandes démarrent le serveur de développement de Next.js, accessible par défaut sur `http://localhost:3000`.

## Déploiement

Le déploiement se fait automatiquement après chaque commit :

1. Le code est poussé sur GitHub.
2. Vercel, la plateforme d'hébergement de votre projet, récupère le dernier commit.
3. Vercel déploie automatiquement le projet en ligne.

## Commandes Git Essentielles

Voici quelques commandes Git de base pour la gestion des versions et des branches :

### Cloner le dépôt :

```bash
git clone <url-du-depot>
```

### Vérifier le statut :

```bash
git status
```

### Ajouter des modifications :

```bash
git add .
```

### Commit des modifications :

```bash
git commit -m "Message du commit"
```

### Pousser les modifications vers la branche principale :

```bash
git push origin train
```

### Changer de branche :

```bash
git checkout <nom-de-la-branche>
```

## Branches du Projet

- **train** : C'est la branche de développement sur laquelle vous travaillez activement.
- **main** : C'est la branche principale, représentant la version stable du projet.

## Bibliothèque UI

Ce projet utilise **Chakra UI**, une bibliothèque de composants React simple et modulable. Elle offre des composants prêts à l'emploi, accessibles, et personnalisables pour construire des interfaces utilisateur modernes et réactives.

## API sendMail

Le projet inclut une API unique, appelée `sendMail`, qui se trouve dans le fichier `app/api/sendGrid/route.js`. Cette API est utilisée pour envoyer des e-mails via le service SMTP de Gmail. Elle est particulièrement utile pour des fonctionnalités comme l'envoi d'e-mails de confirmation, de notifications, ou d'autres types de communication automatisée à vos utilisateurs.

### Fonctionnement de l'API

L'API `sendMail` est une route POST qui prend les paramètres suivants dans le corps de la requête :

- **email** : L'adresse e-mail du destinataire.
- **subject** : L'objet de l'e-mail.
- **message** : Le contenu du message à envoyer.

### Exemple de Requête

Une requête POST typique à cette API pourrait ressembler à ceci :

```json
{
  "email": "destinataire@example.com",
  "subject": "Votre sujet ici",
  "message": "Votre message ici"
}
```

### Implémentation

Voici un aperçu du fonctionnement de l'API :

1. **Extraction des données de la requête** :
   - L'API attend une requête JSON contenant les champs `email`, `subject`, et `message`.

2. **Configuration du transporteur** :
   - L'API utilise la bibliothèque `nodemailer` pour configurer un transporteur SMTP via Gmail.
   - Les informations d'authentification (`user` et `pass`) sont récupérées à partir des variables d'environnement `GMAIL_USER` et `GMAIL_PASS`.

3. **Définition des options de l'e-mail** :
   - L'e-mail est configuré avec l'adresse d'envoi (`from`), l'adresse de destination (`to`), l'objet (`subject`), et le corps du message (`text` et `html`).

4. **Envoi de l'e-mail** :
   - L'e-mail est envoyé en utilisant la méthode `sendMail` de `nodemailer`.
   - En cas de succès, l'API retourne une réponse JSON avec `{ success: true }` et un code de statut `200`.
   - En cas d'échec, l'API capture l'erreur, la log, et retourne une réponse JSON avec le message d'erreur et un code de statut `500`.

---

Vous pouvez maintenant copier-coller ce contenu dans votre fichier `README.md`.
