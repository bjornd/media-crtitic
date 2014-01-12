#!/bin/bash

cd www-dev
sencha app build production
cd ..

rm -rf www
cp -r www-dev/build/production/MC www
cp www-dev/config.xml www/config.xml

rm www/cache.appcache

getopts ":r" release_opt

if [ "$release_opt" = "r" ]
then
    cordova build android --release
    jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/Documents/android-release-key.keystore platforms/android/bin/MediaCritic-release-unsigned.apk alias_name
    zipalign -f -v 4 platforms/android/bin/MediaCritic-release-unsigned.apk platforms/android/bin/MediaCritic-release-unsigned-zipalign.apk
else
    cordova build android
    cordova run android
fi