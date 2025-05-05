FROM node:18-alpine as react-build
ENV HOME=/home
ENV PATH $HOME/app/node_modules/.bin:$PATH

# production@v1

COPY . $HOME/app/
WORKDIR $HOME/app
RUN rm -rf node_modules/ build/
# RUN npm set unsafe-perm true
RUN npm install --force
RUN npm run build
RUN npm install -g serve
COPY . $HOME/app/
EXPOSE 3000
ENTRYPOINT ["serve", "-s", "build", "-p", "3000"]