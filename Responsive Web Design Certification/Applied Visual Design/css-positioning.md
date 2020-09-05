# CSS Positioning

* There are two types of HTML elements:

  - **Inline Elements**: Flow and sit within the surrounding content. You can think of them as being encompassed in the contents of an element. Eg: span, strong, etc...
  - **Block-Level Elements**: Sit on their own line within a modifiable box. Eg: div, p, h1-h6 (heading tags), etc...
  
* This forms or determines the default layout of elements on the webpage and is called the _Normal Flow_ of a document. However, this can easly be changed using the CSS **Position** Property.

* Elements can be positioned using the following **Position Properties**:

    - Relative: Top, Bottom, Left, Right
    - Absolute: Top, Bottom, Left, Right
    
* Relative Position: Allows CSS to position an element relative to its original position in the normal flow of the page. The above CSS Offset Properties tell the browser how many pixels, percentages or ems to move the element _away_ from where it was normally positioned.

### Notes:
***

* Relative Positioning: Relative elements do not disrupt the normal flow of other page elements, it is independent of them.

* IMPORTANT!: Regardless of the position of the elements, the underlying HTML structure must be aligned to logically flow and make sense when read from top to bottm and left to right in the document/page. This is helpful in allowing visually impaired users to easily access your content.
