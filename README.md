## Features

* Ctrl+K - to open dialog to edit link
* Custom button in lightning-input-rich-text 
  * opens dialog to edit link
  * does not remove existing link, if clicked second time for existing link  
* custom dialog window to edit link
  * focus on link, if title is already edited

## Deployment

Create scratchorg:
```bash
sfdx org create scratch --json -f config/project-scratch-def.json -w 120 --duration-days 14 -a richtext-scratch
```

Open example in default browser 
```bash
sf org open   -p "/lightning/n/richTextDemo" -o richtext-scratch  
```

Open example in snap-installed browser on Ubuntu:
```bash
sf org open   -p "/lightning/n/richTextDemo" -o richtext-scratch  --url-only --json
```
Then copy link and paste to browser 
