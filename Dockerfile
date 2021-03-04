FROM node:14.15.4

# set the working direction
WORKDIR /components/app

# add `/app/node_modules/.bin` to $PATH
#ENV PATH /src/node_modules/.bin:$PATH

# install app dependencies
COPY package.json package-lock.json ./

#RUN npm install cross-env
RUN npm install -qy

# add app
COPY . .

RUN npm run build

EXPOSE 3000

# start app
#CMD ["npm", "start", "--host=0.0.0.0"]
CMD ["npm", "start"]
