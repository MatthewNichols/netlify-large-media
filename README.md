# netlify-large-media
Trying out Netlify Large Media Service in a new repository before I try it in code I care about. Might be useful to others wishing to do same.

## References I used:
- https://docs.netlify.com/large-media/setup/#configure-file-tracking
- https://lazy-load-nlm.netlify.com/
- https://css-tricks.com/getting-netlify-large-media-going/

## Procedure to set up (FYI: I did this on Windows)

I am assuming you have the repository cloned to your local and you have npm and git installed. Git LFS was already installed (presumably by my git install), but your milage may vary.

- Open command line in local repository clone
- If netlify-cli is not installed run: `npm install netlify-cli -g`
- Run `netlify link`
- Run `netlify lm:setup`
- Commit changes
- Reboot. I had issues of `'credential-netlify' is not a git command` showing up in the console when I attempted to push my first large media file and rebooting fixed it. Given what some people said I am pretty sure that it is was a path error. Maybe I could have just closed/reopend console. 
- Tell Git LFS what files to store. Something like `git lfs track "*.jpg" "*.png" "*.jpeg"`
- Commit

At this point any of the files that fit the tracking pattern get stored in Git LFS.