# Fintech Workshop 2018

We'll be building (ok, *modifying*) a stripped-down Bootstrap template.
Since this is a hackathon, we are building demos that should show the essence of our idea in the simplest way possible.
The tech doesn't have to be professional quality but it should help illustrate a larger idea.

This tech demo will focus on showing you how to build simple widgets, which are like embeddable chunks of function.
Many people provide widgets for free!

This demo will teach you how to use them, _not use them_! Use widgets sparingly, and with purpose.
Nobody wants to see a demo of meaningless widgets shoved onto a website. You'll also have to be careful about how
widgets are styled. It's easy to jumble together too many widgets, each with their own unique style.

## What's in here?

```
public/  -- The Folder holding your website
    index.html                -- The HTML page that is loaded first. The 'homepage'
    example-bitcoin-data.json -- Some example data
    css/                      -- Holds all our stylesheets
        main.css               -- Our homepage's main styles
        base.css               -- Styles that we've overriden from Bootstrap for the sake of this workshop.
    js/                       -- Holds all our javascript scripts
        main.js                -- Our homepage's main script
    img/                      -- Holds all image assets
    widgets/                  -- All the widgets we will build
    vendor/                   -- Everything that's not ours. Aka other libraries (Bootstrap, jQuery..)

package.json                  -- Autogenerated by node to describe our project. Also feel free to ignore.
README.md                     -- This handy instruction file!
.gitignore                    -- If you're using git, this tells it what we don't want in the repo.
```
## Steps
1. Download Step 1 Code from Drive
2. Just open the `index.html`  
3. Link CSS file
4. Change the Theme Colors using CSS from:  
    --> `#fec503` to `#F44336`  
    --> `#f6bf01` to `#E53935`  
5. Add another Value Proposition
6. Change the Value Proposition icons using Font Awesome `classes`
7. Link the Javascript
8. Find a widget on [Trading View](https://www.tradingview.com/widget/) and integrate it.
12. ? Add Firebase Hosting ? More advanced  
    --> Use `node` and `npm`  
    --> run `npm install -g firebase-tools`  
    --> then run `firebase init` from a command line in the
     **base of this directory**  
    --> then run `firebase deploy`  

## Advanced
You'll need [Node and NPM](https://nodejs.org) installed on your computer and [some basic command line knowledge](https://tutorial.djangogirls.org/en/intro_to_command_line/).

We're going to build our own widgets using Web Components, specifically with the [Polymer Library](https://www.polymer-project.org/2.0/start/quick-tour).

Run in the project directory:
```
npm install --global polyserve
polyserve public # or npm run start
```

Then navigate to [`127.0.0.1:8081/`](http://127.0.0.1:8081/) in your browser of choice. All changes should be visible here when you save
your code and refresh the browser.

### Advanced Steps
1. 

## Resources
* Great Free API's for data! https://github.com/toddmotto/public-apis
* Use widgets within your widgets! https://www.webcomponents.org/
* [Start Bootstrap](https://startbootstrap.com/template-categories/all/) is great for templates in Bootstrap 4.


## Notes
We're using Bootstrap 3. While Bootstrap 4 is out, we haven't had time to update this workshop for it. :shrug:
