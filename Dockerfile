FROM yarnpkg/node-yarn

ADD . /

RUN yarn --dev

RUN npm run build
RUN npm run test



ENTRYPOINT ["/usr/local/bin/node", "index.js"]

