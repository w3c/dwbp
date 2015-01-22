## Data on the Web Best Practices Working Group (dwbp) 

This is the repo for the <a href="http://www.w3.org/2013/dwbp/">Data on the Web Best Practices Working Group</a>.


Issue tracking is disabled in this repo. If you have comments on anything you see here, please send mail to <a href="mailto:public-dwbp-comments@w3.org">public-dwbp-comments@w3.org</a> [<a href="https://lists.w3.org/Archives/Public/public-dwbp-comments/">archive</a>]
(members of the WG should use the regular <a href="mailto:public-dwbp-wg@w3.org">WG mailing list</a>.

The repo includes editors' drafts of the deliverables and notes of the Working Group. Take a look at the <a href="http://www.w3.org/2013/05/odbp-charter">charter</a> for more details and the complete list of deliverables of the Working Group. 

To see action, visit https://w3c.github.io/dwbp

The chairs of the group are <a href="https://github.com/yaso">Yaso</a>, <a href="http://uk.linkedin.com/in/hadleybeeman">Hadley Beeman</a>, 
<a href="http://https://www.deri.ie/users/deirdre-lee"> Deirdre Lee</a> and <a href="http://ibmdatamag.com/author/sadler/">Steve Adler</a>. 

### Contributing

In order to keep everything synced and updated, these steps are recommended to configure a remote repository for your fork.

**Configuring upstream**

Run `$ git remote -v` to list the current remote repository.

If there is only the `origin` repository configured, it's necessary to specify a new remote *upstream* that will be synced with the fork.

```$ git remote add upstream https://github.com/w3c/dwbp.git```

After that, the upstream will be listed on the remote list.

This is a one-time setup procedure.

**Keeping the repository synced**

    $ git fetch upstream
    $ git checkout gh-pages
    $ git merge upstream/gh-pages
