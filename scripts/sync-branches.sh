git checkout master
git pull
git checkout next-minor
git merge master
git push
git checkout dev
git merge next-minor
git push
