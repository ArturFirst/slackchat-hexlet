publish:
	npm publish --dry-run

push:
	sudo git push origin master

fix:
	npx eslint --fix . --ext js,jsx

deploy:
	sudo git push heroku

install-actions:
	npm ci

install: install-deps

start:
	sudo heroku local -f Procfile.dev

start-backend:
	npx nodemon --exec npx babel-node server/bin/slack.js

start-frontend:
	npx webpack-dev-server

install-deps:
	npm install

build:
	rm -rf dist
	npm run build

test:
	npm test -s

test-coverage:
	npm test -- --coverage

lint:
	npx eslint . --ext js,jsx

.PHONY: test