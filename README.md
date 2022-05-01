# GildedRose-Kata   
---
## Requirements Specification 
---

[Specification from  emilybache : ](https://github.com/ChrisHeral/GildedRose-Refactoring-Kata/blob/main/GildedRoseRequirements.txt)

>Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods. 
>Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:
>
>-All items have a SellIn value which denotes the number of days we have to sell the item
>-All items have a Quality value which denotes how valuable the item is
>-At the end of each day our system lowers both values for every item
>
>Pretty simple, right? Well this is where it gets interesting:
>-Once the sell by date has passed, Quality degrades twice as fast
>-The Quality of an item is never negative
>-"Aged Brie" actually increases in Quality the older it gets
>-The Quality of an item is never more than 50
>-"Sulfuras", being a legendary item, never has to be sold or decreases in Quality
>-"Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
>-Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
>-Quality drops to 0 after the concert
>
>We have recently signed a supplier of conjured items. This requires an update to our system:
>-"Conjured" items degrade in Quality twice as fast as normal items
>
>Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn't believe in shared codeownership (you can make the UpdateQuality method and Items property static if you like, we'll cover for you).
>
>Just for clarification, an item can never have its Quality increase above 50, however "Sulfuras" is a legendary item and as such its Quality is 80 and it never alters.

## How to use ? 
---
- **Step 1 :** 
Enter the [app](https://github.com/ACHENU26/GildedRose-Kata/tree/main/app) file run the prod files **gilded-rose.ts** OR launch python on your IDE shell **gilded-rose.ts** 
- **Step 2 :** 
Enter the [test](https://github.com/ACHENU26/GildedRose-Kata/tree/main/test) file run the test files **golden-master-text-test.ts** OR launch python on your IDE shell **golden-master-text-test.ts** 
- **Step 3 :** 
Check the tests results on terminal of your IDE

## Why we chose this topic ?
---
We chose the **"GildedRose-Refactoring-Kata"** project in **Typescript**, because according to our common knowledge of the different test methodologies to set up this project, we found it the most obvious. We carried out a **TDD** (Test Driven Decision) in the development of this project.
## List of actions that we realised
---
### 1. Creation of a "Gilded Rose" class
- Within the class *"Gilded Rose" we add 5 other classes to meet all the changes

1. Class ***"With An Item"***
- Once the expiration date has passed, the quality deteriorates twice as fast.
- The quality of a product can never be negative.
- The quality of a product is never more than 50.

2. Class ***"With multiple Items"***
- Should downgrade all 'Quality' values ​​when updating.
- Should downgrade all 'SellIn' values ​​when updating.

3. Class ***"with Aged Brie"***
- 'Aged Brie' increases in quality as time passes.
- The quality of a product is never more than 50.

4. Class ***"with Sulfuras"***
- 'Sulfuras' does not decrease its Item on update.
- 'Sulfuras' does not increase its quality (quality) on update.

5. Class ***"conjured"***
- 'Conjured' decreases quality twice faster.
- The quality of a product is never more than 50.
- The quality of a product is never negative.


5. Class ***"With a Backstage Pass"***
- If SellIn is 0, Quality must be zero.
- If SellIn is less than 5, Quality should increase from 11 to 14 when updating.
- If SellIn is 5, Quality should increase from 11 to 14 when updating.
- If SellIn is less than 10, Quality should increase from 11 to 13 when updating.
- If SellIn is 10, Quality should increase from 11 to 13 when updating.

### 2. App Improvements
We also make changes to [gilded-rose.ts](https://github.com/ACHENU26/GildedRose-Kata/blob/main/app/gilded-rose.ts) without modifying the Item class : 

1. **Redesigned the classes**
Before we had a single class (*updateQuality*) that was in charge of updating the quality value. We made the decision to divide this class according to each specification. 

2. **Classes creation**
Each of these classes retrieves the value of *DefaultItem*, retrieves the value of SellIn and Quality, and then updates its value (*updateQuality*).

- Class ***DefaultItem*** : *updateQuality*
- Class ***AgedBrie*** : *updateQuality*
- Class ***Conjured*** : *updateQuality*
- Class ***Sulfuras*** : *updateQuality*
- Class ***BackstagePasses*** : *updateQuality*

## Contributors 
---
- [Nicolas MARRY](https://github.com/zygof) 
- [Axel CHENU](https://github.com/ACHENU26)