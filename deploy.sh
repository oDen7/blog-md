#!/usr/bin/env sh
###
 # @File Name: 
 # @Description: 
 # @Author: oDen7
 # @LastEditors: oDen7
 # @LastEditTime: 2022-06-12 19:27:38
### 

set -e

npm run build

cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://${access_token}@github.com/oDen7/blog-md.git t master:gh-pages

cd -