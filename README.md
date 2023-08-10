# My comments:
0. This project  is according https://react.dev/learn 

1. Project_Voting is designed to define who is the best football player by voting.
   It calculates number of voted for certain player,percentage and number of total voted.

2. Structure:index.html --> main.jsx(import App.jsx,index.css) --> App.jsx(import Foto for displaying foto of players)

3. I put these files in '.gitignore' folder:
-    .eslintrc.cjs
-    package-lock.json
-    package.json
-    vite.config.js


4. So we are driving only these files and folders: 
-	README.md
-	index.html
-	public/
-   src(main.jsx,App.jsx,Foto.jsx,index.css) 

5. What's the next: 
+ rendering lists for containers(foto of player + button(left)): '+/-' is done by using display : "flex",next - to try rendering lists
- foto for every players
+ to correct function localPercentage(div. by 0 when it starts): '+' is already done
- new style for buttons  

6. This version will be placed in branch:   f_container :
   - in App.jsx: -2 blocks, +1 block
   - in Foto.jsx: 1 changesgit        



