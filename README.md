## HACTOBER FIESTA 2022 PORTFOLIO SETUP

# INITIAL SETUP
- 1. Have a photo of yours ready in 1:1 ratio. To make it in 1:1 ratio edit the photo and select the crop icon. From there select the square icon, this ensures your photo is in 1:1 ratio.
- 2. Install [VsCode](https://code.visualstudio.com/download),[NodeJs](https://nodejs.org/en/download/),[Git](https://git-scm.com/downloads) and have an account in [Github](https://github.com/)

# CLONING 
- Create a folder wherever you wish.
- Open VsCode and open a new terminal and open the folder you have created .
- Type in the next set of commands. You can copy paste them for your convenience.
- # commands
- 1. git clone https://github.com/Shiyasmohd/hacktober-portfolio
- 2. cd hacktober-portfolio ''' ![cd](https://user-images.githubusercontent.com/71582782/196046212-46f49cc1-10c8-49fe-9e7e-0841f9f7458b.png) '''
- 2. npm install '''![npm install](https://user-images.githubusercontent.com/71582782/196046237-78fe7b39-870e-44da-bf10-737304a2b1e2.PNG) '''
- 3. npm run dev ''' ![npm run dev](https://user-images.githubusercontent.com/71582782/196046294-e77202a9-638a-4027-ac7c-a05b83a3e0e8.png) '''
- 4. After the above command your portfolio will be loaded in the browser. Type [https://localhost:3000](https://localhost:3000) in your browser.
- 5. Voila!! You can see your portfolio.

# WORKING YOUR PORTFOLIO
- Once you have cloned the repository in VsCode, open the files icon on the left side in VsCode.
- Click the "components" folder and copy paste the file "templete.js". You will see that another file "templete copy.js" has been created alongside the original file.
- Rename "templete copy.js" to your "your name.js".
- Now go ahead and copy paste your photo in the folder public of your already created folder. Also remember to rename your photo with your name. This is for ease of working
- Back to VsCode. Click the folder in your name and select the script EntryComponent.js.
- Now edit the line of code " import ProfileImg from '../../public/put the name of your image here.jpg' ".
- Once this part is done reload [https://localhost:3000](https://localhost:3000) . You'll notice that the photo on the top right side is yours..
- Now select the pages folder and select the SampleEntryComponent and rename the file to your name.
- Edit this line " import SampleEntryComponent from "../components/your name(Name of the file in components folder)/EntryComponent"; "
- And you're all done.
