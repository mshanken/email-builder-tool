#Email buider Tool

Create emails with [MJML](https://mjml.io/documentation). Clone this repo to start using this tool for creating emails

This builder has a potential to grow and become a great tool once you master it. You can create templates and layouts that you can use later in an email project.

All you need to run this builder is docker.

##How it works

- Clone this repo in your macine and then cd into it
- Run ```docker-compose up -d``` to start, thic command will install all dependencies to run MJML and other tool to create emails
- Run ```docker-compose exec web npm run browsersync``` and them hit ```CTRL+P CTRL+Q``` to get back to the terminal, now your emails can be preview in browser-sync mode, check [http://localhost:9000/replace-with-the-email-name.html](http://localhost:9000/replace-with-the-email-name.html). At this time docker has set up a local machine to create email and preview them.
- Run ```docker-compose exec web /bin/bash``` to access docker machine from terminal

	* Now you can start building your email
	* Once you are done with your mjml file use the following to convert into html ```./node_modules/.bin/mjml web/newemail-template.mjml -o dist/index.html``` you can use this command instead ```./node_modules/.bin/mjml -w web/newemail-template.mjml -o dist/index.html``` to keep working in new change with out runing the command before everytime.
	* Run ```grunt export``` this will drop all email assets (images and html for archive purposes) into S3 (if see errors ask the developer as you need an access key)
	* Run ```grunt process``` to replace local path to S3.
	* Run ```grunt clear``` to remove and clear main folder, You should always clear your working directory after you are done with a email
	* Run ```grunt import --filename="archived-email-you-want-to-work-with-again.mjml"```
