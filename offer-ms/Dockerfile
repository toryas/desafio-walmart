FROM node:14.17.3-alpine as base
WORKDIR /app
COPY . /app
RUN npm install && npm run build

FROM node:14.17.3-alpine
WORKDIR /app
RUN adduser -h /tmp -s /sbin/nologin -D -H -u 1001 app && \
  chown app:app /app
COPY --chown=app:app --from=base /app/dist /app/dist
USER app
COPY package.json /app
COPY package-lock.json /app
RUN npm install --only=production
CMD [ "npm", "run", "start:prod" ]