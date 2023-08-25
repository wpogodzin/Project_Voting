# My comments:
Last task from Bartek(24.08.23): you vote only for one player
Decision: including operaror 'if count > 0 return' in two handlers:
          - handleClick
          - handleClick_local

0. This project  is according https://react.dev/learn 

1. Project_Voting_container is designed to define who is the best football player   by voting(another version of Project_Voting).
It calculates number of voted for certain player,percentage and number of total voted.

   Main additional features: 
1.creating flex for every player consisting of name, foto and button
(f.'WorldStar') 
2.creating star_array in (data for every star) in module 'StarFoto' and using data by index(index created in main function 'App')


2. New structure:
index.html --> 'main'(import 'App',index.css) --> 'App'
'App' --> 'WorldStar'(new f. - for constructing horisontal "flex")
'WorldStar' -->  module 'StarFoto'(old named 'Foto') locally imported 
          -->  'VotingButton'(old named 'Button') 
'VotingButton'(makes all calcs) --> module 'LocalPercentage'( locally imported)

3. I put these files in '.gitignore' folder:
-    .eslintrc.cjs
-    package-lock.json
-    package.json
-    vite.config.js
-    folder 'components' with fotos (new)


4. So we are driving only these files and folders: 
-	README.md
-	index.html
-	public/
-   src:
    main.jsx,
    App.jsx,
    WorldStar.jsx,
    StarFoto.jsx,
    VotingButton.jsx,
    LocalPercentage.jsx,
    index.css 

5. What's the next(it was almost done)
+ rendering lists for containers(foto of player + button(left)): '+/-' is done by using display : 1."flex" - done
                2. to try rendering lists - no
+ foto for every players - done
+ to correct function localPercentage(div. by 0 when it starts): '+' is already done
+ new style for buttons  - done

6. Changes: all in detailed commentaries and README.md

7. Tas




