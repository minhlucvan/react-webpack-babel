# react-webpack-babel
Simple React Webpack Babel Styled Components Starter Kit

Tired of complicated starters with 100MB of dependencies which are hard to understand and modify?

Try this is a simple [React](https://facebook.github.io/react/), [Webpack](http://webpack.github.io/), [Babel](https://babeljs.io/) and [styled components](https://styled-components.com/) application with nothing else in it.

# original repository

this repository is forked from [react-webpack-babel](https://github.com/alicoding/react-webpack-babel) and edit to work with `styled-component`, if you're not familiar with `styled-component`, or prefer `css-mudule` please use the (this)[https://github.com/alicoding/react-webpack-babel]  instead;

many thanks to [react-webpack-babel](https://github.com/alicoding/react-webpack-babel) contributors.

### What's in it?

* Simple src/index.jsx and src/index.css (local module css).
* Webpack configuration for development (with hot reloading) and production (with minification).
* Styled components for styling, styles are writen in `styles.jsx`.
* Both js(x) and css hot loaded during development.
* [Webpack Dashboard Plugin](https://github.com/FormidableLabs/webpack-dashboard) on dev server.

### To run

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
* Fork and clone the project:

```
git clone https://github.com/minhlucvan/react-webpack-babel-styled.git
```

* Then install the dependencies:

```
npm install
```

* Run development server:

```
npm start
```

* Or you can run development server with [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard):

```
npm run dev
```

Open the web browser to `http://localhost:8888/`

### To build the production package

```
npm run build
```

### Nginx Config

Here is an example Nginx config:
```
server {
	# ... root and other options

	gzip on;
	gzip_http_version 1.1;
	gzip_types text/plain text/css text/xml application/javascript image/svg+xml;

	location / {
		try_files $uri $uri/ /index.html;
	}

	location ~ \.html?$ {
		expires 1d;
	}

	location ~ \.(svg|ttf|js|css|svgz|eot|otf|woff|jpg|jpeg|gif|png|ico)$ {
		access_log off;
		log_not_found off;
		expires max;
	}
}
```

### Eslint
There is a .eslint.yaml config for eslint ready with React plugin.
To use it, you need to install additional dependencies though:

```
npm install --save-dev eslint eslint-plugin-react
```

To do the actual linting, run:

```
npm run lint
```

### Contribute
Please contribute to the project if you know how to make it better, including this README :)
