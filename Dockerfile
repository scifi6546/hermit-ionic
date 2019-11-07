from node
RUN useradd -ms /bin/bash app_user
WORKDIR /home/app_user
WORKDIR /home/app_user
copy . .
run chown -R app_user .
user app_user
RUN npm install
RUN npm run build
expose 5000
CMD ["npm","run","serve_prod"]