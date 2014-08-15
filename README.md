# Website for the Columbus JavaScript Usergroup

This site is built in Jekyll and hosted on GitHub. Because it has a custom plugin, it must be rendered locally before being pushed to gh-pages. There is a rake task in place to easily do this.

Build the site:

```sh
$ jekyll build
```
Run a local server:

```sh
$ jekyll serve -w --config _dev_config.yml
```

To publish site, do a build, then rake:

```sh
$ jekyll build
$ rake blog:publish
 ```

References:

[http://blog.sorryapp.com/blogging-with-jekyll/2014/01/31/using-jekyll-plugins-on-github-pages.htm](http://blog.sorryapp.com/blogging-with-jekyll/2014/01/31/using-jekyll-plugins-on-github-pages.htm)

[http://www.jaredwolff.com/blog/jekyll-local-preview/](http://www.jaredwolff.com/blog/jekyll-local-preview/)