# Jekyll will import posts from Blogger, but they still contain image
# references to Blogger's CDN. This script:
# - Finds all image references in an imported blogger page
# - Downloads the images into the assets/ directory
# - Rewrites the page with the appropriate image link

import re
import sys
import urllib
import os

#![8 x 1-bit Arithmetic Unit Relays](http://1.bp.blogspot.com/-wpv8mYQt0bI/UoiRAlHnVVI/AAAAAAAABaE/7Fo1CDoM1Zc/s1600/ALU-AU+1.png)
#[larger](https://4.bp.blogspot.com/-ciT1kmhZROE/WntrmWmr4sI/AAAAAAAAC84/GFR7HZIT6CYe3YwgLW_T6K0W7jtxJEAoQCLcBGAs/s1600/Screen%2BShot%2B2018-02-07%2Bat%2B21.11.23.png)
#thumbnail: https://1.bp.blogspot.com/-kuvhf5bPnRk/WiBu2XferBI/AAAAAAAACxo/HMVZGwThtxovzHTg3Vmw7BPpBC5xTJlgwCLcBGAs/w512-h512-p-k-no-nu/IMG_2748.jpg

IMG_RE = re.compile('(thumbnail: )(?P<src>.+)')
DATE_RE = re.compile('(?P<date>[0-9]+\-[0-9]+\-[0-9]+)')

files = [f for f in os.listdir('_posts') if re.match(r'[0-9]+.*\.md', f)]
for filename in files:
    date_prefix = DATE_RE.search(filename).group('date')
    year = date_prefix[:4]
    with open('_posts/' + filename, 'r') as f:
        file_index = 4000
        contents = f.read()
        for match in IMG_RE.finditer(contents):
            sourceurl = match.group('src')
            extstart = sourceurl.rfind('.')
            extension = sourceurl[extstart:]
            newfile = year + '/' + date_prefix + '-{:04d}{}'.format(file_index, extension)
            file_index += 1
            print('{} => {}'.format(sourceurl, newfile))
            urllib.URLopener().retrieve(sourceurl, 'assets/img/posts/' + newfile)
            contents = contents.replace(sourceurl, '/assets/img/posts/' + newfile)

    with open(filename, 'w') as f:
        f.write(contents)