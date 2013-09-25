#!/bin/bash

cd www-dev
sencha app build production
cd ..

cp -r www-dev/build/MC/production www
cp www-dev/config.xml www/config.xml

rm www/cache.appcache

cordova run android