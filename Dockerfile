FROM node:8-alpine
ADD . /
EXPOSE 6617
CMD ["node","index.js"]