Install docker 

Then run the following commands:

curl -OL https://github.com/run00/ember-test/archive/master.zip
unzip master.zip
cp -a ember-test-master/. $(pwd)
rm master.zip
eval "$(docker-machine env default)"
. setup.sh
npm install
bower install
docker-compose up
