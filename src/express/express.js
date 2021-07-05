'use strict';

const express = require(`express`);
const path = require(`path`);
const mainRouter = require(`./routes/main`);
const myRouter = require(`./routes/my`);
const offersRouter = require(`./routes/offers`);

const DEFAULT_PORT = 8080;
const GeneralDir = {
  PUBLIC: `public`,
  TEMPLATES: `templates/pages`,
};

const app = express();

app.use(express.static(path.resolve(__dirname, GeneralDir.PUBLIC)));

app.use(`/`, mainRouter);
app.use(`/my`, myRouter);
app.use(`/offers`, offersRouter);

app.use((req, res) => res.status(400).render(`400`));
app.use((err, req, res) => res.status(500).render(`500`));

app.set(`views`, path.resolve(__dirname, GeneralDir.TEMPLATES));
app.set(`view engine`, `pug`);

app.listen(DEFAULT_PORT, () => console.log(`Server is running ${DEFAULT_PORT}`));
