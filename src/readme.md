Your task is to implement a simple tabs component in React.

Requirements
Your component must return a div with a className of tabs.
For each children element with the title property, the component should render a button with the className of btn.
Clicking on a button should change the currently active tab by:
rendering a child element corresponding to it in a div with a className of view;
disabling the button (HTML attribute) and changing its className to btn-active.
Initially the first tab should be active (the first child rendered, and the first button disabled and with class btn-active).
Only one button should be active at any given moment.
Remember to make your component the default export

Hints
Your solution will be evaluated based on its correctness; performance and coding style will not be assessed.
Both class and functional components are allowed
Available packages/libraries
JavaScript ES9 +
React 17.0.1
