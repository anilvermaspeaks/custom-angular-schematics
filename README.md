### install - @angular-devkit/schematics-cli


### run - schematics blank name-of-schematics


### run - npm run build:watch



### run - schematics .:custom-schematics
custom-schematics just returns the tree and hence no changes are performed and Nothing to be done message is displayed in the console



### after making changes run - schematics .:custom-schematics --debug=false

### pass parameters  run - schematics .:custom-schematics --name=Anil --debug=false

create schema.json for better handling of options

Now you can run command without nameflag but directly pass name
### pass parameters  run- schematics .:custom-schematics Anil --debug=false


add prompt in schema.json
### pass parameters  run- schematics .:custom-schematics  --debug=false