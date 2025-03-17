# Welcome to Bug Wrangler Ranch

This first self-assessment is for you to hone several Core Skills that you need as a software developer.

Taking your time now to be thorough, reflective, patient and curious will give you the foundation to be successful throughout the rest of this course and your career.

If you rush this, or think of it as a test to be "passed", then you will already be on the wrong path.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Description

Slim Jenkins offers a vacation package for people who have always wanted to join a cattle driving team across the American Midwest.

He calls it the **Kansas Slim's Cattle Adventure**.

People join a team of experienced drovers who will train them in the basics of herding cattle and driving them across hundreds of miles to their destination at Old Red's Ranch.

Unfortunately, someone gained access to the code that produces an outline of the adventure to the paying customers, so Slim has hired you to examine and fix the code.

## Learning Objectives

Here are your learning objectives for this self-assessment.

1. Able to use the debugger to step through existing code to discover root causes of bugs.
2. Drawing a sequence diagram for a project.
   > Use the [sequencediagram.org](https://sequencediagram.org/) site to generate your sequence diagram. Make sure you save your work as you go.
3. Demonstrate learning efficiency by researching concepts you haven't seen before using your peers, mentors, and the World Wide Web as resources.
4. Awareness of when you need help, and then seeking it out.

## Example Output

If you are able to fix all of the bugs, you will output similar to what is below. It will not be identical, but similar.

```sh
************************************************
**  K A N S A S   S L I M ' S   C A T T L E   **
************************************************

\|/         (__)
     '------(oo)
       ||   (__)               \|/
       ||w--||     \|/
   \|/
            \|/                     (__)
                             '------(oo)
                               ||   (__)
                               ||w--||     \|/

You will be accompanying 5 drovers as they drive 50 cattle to Old Red's Ranch for grazing

The herd is made of up the following types of cattle:
Ankole-Watusi,Brown Swiss,Brown Swiss,American Angus,Brown Swiss,
Ankina,American Angus,A,Brown Swnkinaiss,Ankole-Watusi,Brown Swiss,
Brown Swiss,American Angus,Ankina,Ankole-Watusi,Brown Swiss,Brown Swiss,
Ankina,Brown Swiss,Ankina,Ankole-Watusi,Brown Swiss,Brown Swiss,
Ankole-Watusi,American Angus,Brown Swiss,American Angus,Ankole-Watusi,
Ankole-Watusi,American Angus,Ankina,Ankina,Ankina,Ankole-Watusi,
American Angus,Brown Swiss,American Angus,Brown Swiss,American Angus,
American Angus,Ankina,Brown Swiss,American Angus,Ankina,Brown Swiss,
American Angus,Ankole-Watusi,Ankina,American Angus,Brown Swiss

Here is the team of drovers you will be joining
        * Melvyn Hethron
        * Yancy Gresley
        * Willabella Attarge
        * Ynes Gyenes
        * Farlie Spere


Your journey will take you through the wildness of the American Midwest and across the following terrain
        * forest
        * plain
        * river
        * mountain
```

1. In the **main** module, one of the first lines of code is `const drovers = hireDrovers(cattleToDrive)`. Explain what the value of the `drovers` variable is when that line of code runs.

   > When 'drovers' runs it is being passed through the hireDrovers function.

2. At the bottom of the main module, you will see the following code - `for (const drover of drovers)`. Explain what the values of both the `drover` and the `drovers` variables are.

   > 'drover' is the name of the variable that is being used to iterate through the 'drovers' array and can return data types, such as a string. When this is console logged it will output names of the drovers from the 'drovers' array inside { database }.

3. In the **journey** module, there is a `journeyMaker()` function. In that function, there is a variable named `areas` which will have the value of an object. Use your debugger to show what the value of each key is on that object. Use [Loom](https://www.loom.com) to record your session.

   > https://www.loom.com/share/1dede51d160744e6bb4d09e62e462509?sid=1ee0c9a5-ed63-4171-a62a-1333d533d7fc

4. Also in the **journey** module, there is the following code:
   ```js
   for (let forestNumber = 0; forestNumber < areas.forests; forestNumber++) {
      journey.push("forest")
   }
   ```
   Explain this code with your best vocabulary.
   > A for loop, letting the variable forestNumber be the value of 0. then, 0 is less than areas.forests which is passed through the createForests function variable, and that is randomly generating a numeric value with the math.floor(math.random) methods to return a new value for 'forests'. So, 0 < random number generated; and forestsNumber++ is just adding 1 to the number that was generated for 'forests' via createForests function, and then that new value is being put on the end of the journey array using the .push method.


5. Explain the value of the `database` variable in the **database** module. Be as comprehensive as possible.

   > The 'database' variable is where all the data is stored in arrays, that other functions use to pull properties of object or data types when they are invoked or called upon.

6. In the **drovers** module, there is a `hireDrovers()` function. You will notice the following code on that line - `(herdSize)`. What is that defining, and where does it get its value?

   > (herdSize) is the parameter being passed through the hireDrovers function, and it is defining the amount of drovers needed to herd the cattle (cattleToDrive = 50). It's value comes from the variable cattleToDrive.

## When You Are Done

After you have answered all the questions above, you need to push all of your code back up to Github. Follow these instructions.

1. Be in the `bug-wrangler-ranch` directory.
2. `git add --all`
3. `git commit -m "Code complete"`
4. `git push origin main`

Then go to the Learning Platform and click the **Self-assessment Complete** button.
