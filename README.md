# ReadME

## Credits - I am thankful to these brilliant People.

This is a personal website for myself. 

- This is made using ReactJS, Bulma and a help from fellow engineer.
- One need to update resume.json for making it for self.
- You can head to https://github.com/jcoelho93/personal-website repo for original work. 

- **Use this if you need an Education Section and Get ur articles from Medium**
- **Also this deployment is completely modular meaning that you can edit the sections and colors without touching other parts of the website**

## How to make it your own?
You can make this your own by following these steps:
1. If you do not have React and npm install, I hope you can find this article helpful. https://www.zeolearn.com/magazine/setup-react-ubuntu

2. **Editing the website:**
- Clone this repo using git clone.
- Edit Resume.json
- Edit theme.json Play around with colors and css. This part may require you to be careful. You have theme.json as below.
	``` 
     "aboutme":{
     "background":"dark",
	   "textColor":"light",
	   "badge":"is-light" }
 - Here the values are actually the last part of bulma.css values. Thus you need to check bulma for the variety of options you have. 
  For example: Some of the colors are dark, light,gray,white etc.
  Here is the link to the Helpers page: https://bulma.io/documentation/helpers/
  It is fairly easily to navigate the documentation and with hit trial you will get to know why I took only a part of it.
 - Structure.json contains contents and string. If you do not want any of the section, just keep empty string and it will not render that section.
 - Make you change any Image/Background that is specific to the user i.e. me.

3. **Deploying the website using github-pages:**
 I took help from this article: https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f

## Contributing
If you are proficient in React and found a better way to approach something, Feel Free to raise a PR as well as send a mail as a reminder. I would be glad if this can be more helpful

## Like it?
Star this and the original repo for the efforts.

Thanks,
Apoorv
