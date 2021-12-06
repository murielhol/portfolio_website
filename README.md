# portfolio_website

# setup

- aws-vault: to handle aws credentials
- pipenv to handle python dependencies 
- terraform 

# to upload new website code

first sync all files with the s3 bucket
```
cd src
aws-vault exec <profile> aws s3 sync . s3://www.murielhol.com
```

Then invalidate the cloudfront cache, unless the change is minor and you don't mind the old version sticking around for a while

```
aws-vault exec <profile> python3 invalidate_cloudfront_cache.py
```

# AWS region

I choose Ireland based on:
https://www.concurrencylabs.com/blog/choose-your-aws-region-wisely/

### Very grateful for these resources

https://www.alexhyett.com/terraform-s3-static-website-hosting#terraform-command-to-deploy-our-infrastructure
https://gist.github.com/jolexa/e58ea2ec19cf3067d0ddfbdc98bbaf6d