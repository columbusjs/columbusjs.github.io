# Website for the Columbus JavaScript Usergroup

This site is built in Jekyll and hosted on GitHub. Because it has a custom plugin, it must be rendered locally before being deployed. There is a rake task in place to easily do this.

The Master branch is used for deployment, so before deploying, create a development branch and set this as your default branch on github. 

From the root of your project folder:

Build the site:

```sh
$ jekyll build
```
Run a local server:

```sh
$ jekyll serve -w --config _dev_config.yml
```

To publish:

```sh
$ rake blog:publish
 ```

There is a JS function for camelizing names that begin with Mac, Mc, or O'. Simply leave a space after the prefix when listing the name at the top of the post (in the category list) in order to make this work.

This is necessary because the categories are transformed to lowercase and capitalizing only works when there is a space or '-', etc. between letters. These spaces need to be removed somehow and JS does the trick for this use case.

Names should be inserted into the post content normally though (without the space).

References:

[http://blog.sorryapp.com/blogging-with-jekyll/2014/01/31/using-jekyll-plugins-on-github-pages.html](http://blog.sorryapp.com/blogging-with-jekyll/2014/01/31/using-jekyll-plugins-on-github-pages.html)

[http://www.jaredwolff.com/blog/jekyll-local-preview/](http://www.jaredwolff.com/blog/jekyll-local-preview/)

[http://ixti.net/software/2013/01/28/using-jekyll-plugins-on-github-pages.html](http://ixti.net/software/2013/01/28/using-jekyll-plugins-on-github-pages.html)