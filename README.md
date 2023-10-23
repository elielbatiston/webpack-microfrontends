
# 1_INTRO

npm install webpack webpack-cli

npx webpack

# 3_LOADERS
npm install --save-dev style-loader css-loader
npm install --save-dev file-loader
npm install --save-dev sass-loader node-sass
npm install --save-dev babel-loader @babel/preset-env @babel/plugin-proposal-object-rest-spread
npm install --save-dev @babel/core
npm install --save-dev html-loader
npm install --save-dev raw-loader

# 4_PLUGINS
npm install --save-dev mini-css-extract-plugin
npm install --save-dev terser-webpack-plugin
npm install --save-dev dotenv-webpack
npm install --save-dev html-webpack-plugin
npm install --save-dev clean-webpack-plugin

# 5_MODE 
npm install --save-dev webpack-dev-server

# 6_INTEGRACOES
npm install --save-dev jquery
npm install --save-dev url-loader
npm install --save-dev @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons
npm install bootstrap jquery @popperjs/core
npm install --save-dev popper.js

# 7_INTEGRACOES_BULMA
npm install --save-dev bulma css-loader mini-css-extract-plugin node-sass sass-loader style-loader webpack webpack-cli

# 8_INTEGRACOES_REACT
npm install react react-dom webpack-dev-server html-webpack-plugin @babel/core @babel/plugin-proposal-class-properties @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli

# 9_INTEGRACOES_VUE
npm install --save-dev vue vue-router @babel/preset-env autoprefixer babel-loader clean-webpack-plugin html-webpack-plugin mini-css-
extract-plugin vue-loader vue-template-compiler webpack webpack-cli webpack-dev-server

# 10_INTEGRACOES_TYPESCRIPT
npm install --save-dev typescript ts-loader webpack webpack-cli

# 11_INTEGRACOES_EXPRESS
npm install --save-dev express @types/express
npm install --save-dev typescript ts-loader

# 12_AVANCADO
npm install --save-dev lodash

Site para analisar a performance do meu projeto
acesse = https://alexkuz.github.io/webpack-chart

Execute o comando 
npx webpack --profile --json=status

Será criado o arquivo status no root do projeto. Abra o arquivo dentro do site