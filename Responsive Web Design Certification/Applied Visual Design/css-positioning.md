# CSS Positioning

* There are two types of HTML elements:

  - **Inline Elements**: Flow and sit within the surrounding content. You can think of them as being encompassed in the contents of an element. Eg: span, strong, etc...
  - **Block-Level Elements**: Sit on their own line within a modifiable box. Eg: div, p, h1-h6 (heading tags), etc...
  
* This forms or determines the default layout of elements on the webpage and is called the _Normal Flow_ of a document. However, this can easly be changed using the CSS **Position** Property.

* Elements can be positioned using the following **Position Properties**:

    - **Relative: Top, Bottom, Left, Right**
    - **Absolute: Top, Bottom, Left, Right**
    - **Fixed: Top, Bottom, Left, Right**
    
* Relative Position: Allows CSS to position an element relative to its original position in the normal flow of the page. The above CSS Offset Properties tell the browser how many pixels, percentages or ems to move the element _away_ from where it was normally positioned.

* Absolute Position: Positions elements relative to their parent container/element. In order for elements to be absolutely positioned, their parent element must firstly be relatively positioned.

* Fixed Position: A type of absolute positioning that fixes or locks elements relative to the _browser window_.

#### CSS Offsets:

* CSS Offsets: Top, Bottom, Left, Right.
* The CSS Offsets tell the browser _how far to offset_ an element relative to where it would sit in the normal flow of the document. 
* Offsetting elements basically moves them away from the referenced point/spot, essentially moving them in the opposite direction. Eg: The TOP Offset moves the specified element down and the LEFT Offset moves an item to the right of where it was originally positioned.

#### Floats:

* Float is another positioning tool. Similar to absolute and fixed positions, it removes an element from the natural flow of the document and pushes it to the left or right of its containing parent element.

* The float position is commonly used with the **width** property to specify how much _horizontal space_ the floated element requires.

* Values of the float property:

    - Left: floats an element to the left of its containing parent element.
    - Right: floats an element to the right of its containing parent element.
    
#### Positioning Overlapping Elements with Z-Index:

* Overlapping elements can be positioned in a certain fashion/order using the z-index property.

* Elements that display on top of others have a higher z-index number and value, whilst elements stacked below have a lower z-index number. z-index values are integer-based values and not decimals.

#### Positioning Techniques:

* **Margin**: The margin property is another positioning technique that can be used to _center_ a block element _horizontally_.

* Block elements are centered horizontally using the _auto_ value of the margin property.

### Notes:
***

* Relative Positioning: Relative elements do not disrupt the normal flow of other page elements, it is independent of them.

* IMPORTANT!: Regardless of the position of the elements, the underlying HTML structure must be aligned to logically flow and make sense when read from top to bottm and left to right in the document/page. This is helpful in allowing visually impaired users to easily access your content.

* Absolute Positioning: Elements absolutely positioned will be locked relative to its closest positioned _ancestor_. Eg: If you forget to format an element's parent container with the position rule, the browser will continue looking up the chain until it finds an ancestor with a relative position assigned to it and will lock it to that parent element accordingly. 

* IMPORTANT!: Unlike relative positioning, absolute positioning removes elements from the normal flow of a document. Similarly, fixed positioning also has the same effect on elements it is applied to.

* IMPORTANT!: Key difference between absolute and fixed positions - elements with a fixed position will not move when the user scrolls.
